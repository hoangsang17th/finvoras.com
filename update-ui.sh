#!/bin/bash

# 🔄 Auto-Update Script for shared_app Package
# This script automatically updates the UI package across all consumer projects

set -e  # Exit on any error

# Colors for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project paths
UI_PATH="./packages/shared_app"
PROFILECV_PATH="./profilecv"
SAAS_PATH="./saas-marketing"
TEST_PATH="./test-consumer"

echo -e "${BLUE}🔄 Starting shared_app update process...${NC}"

# Step 1: Build UI package
echo -e "\n${YELLOW}📦 Building shared_app package...${NC}"
cd "$UI_PATH"

if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found in $UI_PATH${NC}"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📥 Installing dependencies...${NC}"
    npm install --force
fi

# Build the package
echo -e "${YELLOW}🔨 Building package...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ shared_app built successfully!${NC}"

# Step 2: Update ProfileCV project
if [ -d "../$PROFILECV_PATH" ]; then
    echo -e "\n${YELLOW}🔄 Updating ProfileCV project...${NC}"
    cd "../$PROFILECV_PATH"
    
    if [ -f "package.json" ]; then
        npm update shared_app
        echo -e "${GREEN}✅ ProfileCV updated!${NC}"
    else
        echo -e "${YELLOW}⚠️  ProfileCV package.json not found, skipping...${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  ProfileCV project not found, skipping...${NC}"
fi

# Step 3: Update SaaS Marketing project  
if [ -d "../$SAAS_PATH" ]; then
    echo -e "\n${YELLOW}🔄 Updating SaaS Marketing project...${NC}"
    cd "../$SAAS_PATH"
    
    if [ -f "package.json" ]; then
        npm update shared_app
        echo -e "${GREEN}✅ SaaS Marketing updated!${NC}"
    else
        echo -e "${YELLOW}⚠️  SaaS Marketing package.json not found, skipping...${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  SaaS Marketing project not found, skipping...${NC}"
fi

# Step 4: Update Test Consumer (if exists)
if [ -d "../$TEST_PATH" ]; then
    echo -e "\n${YELLOW}🔄 Updating Test Consumer project...${NC}"
    cd "../$TEST_PATH"
    
    if [ -f "package.json" ]; then
        npm update shared_app
        npm test  # Run test to verify
        echo -e "${GREEN}✅ Test Consumer updated and verified!${NC}"
    else
        echo -e "${YELLOW}⚠️  Test Consumer package.json not found, skipping...${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Test Consumer project not found, skipping...${NC}"
fi

# Step 4: Show summary
echo -e "\n${GREEN}🎉 Update process completed!${NC}"
echo -e "${BLUE}📋 Summary:${NC}"
echo -e "  ✅ shared_app package built"
echo -e "  ✅ Consumer projects updated"
echo -e "\n${YELLOW}💡 Next steps:${NC}"
echo -e "  1. Test your applications: ${BLUE}npm run dev${NC}"
echo -e "  2. Check for any breaking changes"
echo -e "  3. Commit and push changes if everything works"

# Optional: Show package version
cd "../$UI_PATH"
PACKAGE_VERSION=$(node -p "require('./package.json').version")
echo -e "\n${BLUE}📦 Current shared_app version: v${PACKAGE_VERSION}${NC}"