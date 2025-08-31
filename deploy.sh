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

# check if pm2 process is running for this subgraph then reload it otherwise start it
if pm2 list | grep -q "techanalyzen-frontend"; then
echo "Reloading techanalyzen-frontend subgraph (pm2: techanalyzen-frontend)"
pm2 reload "techanalyzen-frontend"
else
echo "Starting techanalyzen-frontend subgraph (pm2: techanalyzen-frontend)"
pm2 start npm --name "techanalyzen-frontend" -- run start
fi

echo "Deployment completed successfully."