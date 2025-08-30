#!/bin/bash

APP_DIR="$HOME/projects/techanalyzen.com"

cd $APP_DIR || exit

echo "SSH key setup..."
eval "$(ssh-agent -s)"
ssh-add "$HOME/.ssh/github"

echo "Stashing unstaged changes..."
git stash save "Auto-stashed during deployment $(date)"

echo "Pulling latest code..."
git fetch origin
git pull origin main --force

echo "Installing dependencies..."
npm install --legacy-peer-deps

echo "Building project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed. Aborting deployment."
    exit 1
fi

# We'll use the existing ecosystem.config.js file instead of generating it

echo "Using existing ecosystem configuration for zero-downtime deployment"

# Check if both PM2 processes exist
if pm2 describe ta-frontend-main > /dev/null 2>&1 && pm2 describe ta-frontend-secondary > /dev/null 2>&1; then
    echo "Both instances exist, performing sequential reload..."
    
    # First reload secondary instance
    echo "Reloading ta-frontend-secondary instance..."
    pm2 reload ta-frontend-secondary --update-env
    
    # Check if secondary reload was successful
    if [ $? -eq 0 ]; then
        echo "Secondary instance reloaded successfully. Waiting 10 seconds before reloading main instance..."
        sleep 10
        
        # Then reload main instance
        echo "Reloading ta-frontend-main instance..."
        pm2 reload ta-frontend-main --update-env
    else
        echo "Error reloading secondary instance. Aborting main instance reload."
        exit 1
    fi
else
    # Clean up any existing instances to start fresh
    echo "One or both instances don't exist. Cleaning up and starting fresh..."
    pm2 delete ta-frontend-main 2>/dev/null || true
    pm2 delete ta-frontend-secondary 2>/dev/null || true
    pm2 delete ta-frontend 2>/dev/null || true # for legacy instance name

    # Start fresh with the new config
    echo "Starting both ta-frontend instances..."
    pm2 start ecosystem.config.js
fi