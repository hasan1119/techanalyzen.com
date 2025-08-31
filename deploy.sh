#!/bin/bash

APP_DIR="$HOME/projects/techanalyzen.com"

cd $APP_DIR || exit

echo "SSH key setup..."
eval "$(ssh-agent -s)"
ssh-add "$HOME/.ssh/id_ed25519"

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

sudo systemctl daemon-reload
sudo systemctl restart ta-nextjs
sudo systemctl status ta-nextjs

echo "Deployment completed successfully."