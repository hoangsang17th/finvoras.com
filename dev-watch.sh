#!/bin/bash

# 🔥 Development Watch Mode for @finvoras/ui
# This script runs the UI package in watch mode and auto-updates consumer projects

set -e

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

UI_PATH="./finvoras-ui"

echo -e "${BLUE}🔥 Starting @finvoras/ui development watch mode...${NC}"

# Check if finvoras-ui exists
if [ ! -d "$UI_PATH" ]; then
    echo -e "${RED}❌ Error: $UI_PATH directory not found${NC}"
    exit 1
fi

cd "$UI_PATH"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📥 Installing dependencies...${NC}"
    npm install --force
fi

echo -e "${GREEN}✅ Ready! UI package will auto-rebuild on changes${NC}"
echo -e "${YELLOW}💡 Tip: Run 'npm run update-consumers' in another terminal after making changes${NC}"
echo -e "${BLUE}🔍 Watching for changes in: ${UI_PATH}/src/${NC}"

# Start development mode with watch
npm run dev