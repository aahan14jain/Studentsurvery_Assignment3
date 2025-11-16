#!/bin/bash

# ===============================
# CLEAN REPOSITORY STRUCTURE
# ===============================

echo "Starting cleanup..."

# 1. Remove wrongly committed folders
echo "Removing node_modules..."
rm -rf node_modules 2>/dev/null && echo "  ✓ Removed node_modules" || echo "  - node_modules not found"

echo "Removing student-survey-fastapi-react..."
rm -rf student-survey-fastapi-react 2>/dev/null && echo "  ✓ Removed student-survey-fastapi-react" || echo "  - student-survey-fastapi-react not found"

# 2. Remove wrong root-level JS files
echo "Removing root-level package files..."
rm -f package.json 2>/dev/null && echo "  ✓ Removed package.json" || echo "  - package.json not found"
rm -f package-lock.json 2>/dev/null && echo "  ✓ Removed package-lock.json" || echo "  - package-lock.json not found"

# 3. Remove Python/Node cache & temp files
echo "Removing __pycache__ directories..."
find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null
PYCACHE_COUNT=$(find . -type d -name "__pycache__" 2>/dev/null | wc -l | tr -d ' ')
if [ "$PYCACHE_COUNT" -eq 0 ]; then
    echo "  ✓ All __pycache__ directories removed"
else
    echo "  ⚠ Found $PYCACHE_COUNT __pycache__ directories remaining"
fi

echo "Removing .pyc files..."
find . -name "*.pyc" -delete 2>/dev/null
PYC_COUNT=$(find . -name "*.pyc" 2>/dev/null | wc -l | tr -d ' ')
if [ "$PYC_COUNT" -eq 0 ]; then
    echo "  ✓ All .pyc files removed"
else
    echo "  ⚠ Found $PYC_COUNT .pyc files remaining"
fi

echo "Removing venv directories..."
find . -type d -name "venv" -exec rm -rf {} + 2>/dev/null
VENV_COUNT=$(find . -type d -name "venv" 2>/dev/null | wc -l | tr -d ' ')
if [ "$VENV_COUNT" -eq 0 ]; then
    echo "  ✓ All venv directories removed"
else
    echo "  ⚠ Found $VENV_COUNT venv directories remaining"
fi

echo "Removing .DS_Store files..."
find . -name ".DS_Store" -delete 2>/dev/null
DSSTORE_COUNT=$(find . -name ".DS_Store" 2>/dev/null | wc -l | tr -d ' ')
if [ "$DSSTORE_COUNT" -eq 0 ]; then
    echo "  ✓ All .DS_Store files removed"
else
    echo "  ⚠ Found $DSSTORE_COUNT .DS_Store files remaining"
fi

echo "Removing .log files..."
find . -name "*.log" -delete 2>/dev/null
LOG_COUNT=$(find . -name "*.log" 2>/dev/null | wc -l | tr -d ' ')
if [ "$LOG_COUNT" -eq 0 ]; then
    echo "  ✓ All .log files removed"
else
    echo "  ⚠ Found $LOG_COUNT .log files remaining"
fi

# 4. Remove SQLite files if accidentally added
echo "Removing database files..."
find . -maxdepth 1 -name "*.db" -delete 2>/dev/null
find . -maxdepth 1 -name "*.sqlite" -delete 2>/dev/null
DB_COUNT=$(find . -maxdepth 1 -name "*.db" -o -name "*.sqlite" 2>/dev/null | wc -l | tr -d ' ')
if [ "$DB_COUNT" -eq 0 ]; then
    echo "  ✓ All database files removed from root"
else
    echo "  ⚠ Found $DB_COUNT database files remaining"
fi

# 5. Ensure backend has only correct files
echo "Ensuring directory structure..."
mkdir -p backend
mkdir -p frontend

echo ""
echo "=========================================="
echo "CLEANUP COMPLETE!"
echo "=========================================="
echo ""
echo "Final structure:"
tree -L 3 -I 'node_modules|venv|__pycache__|*.pyc' 2>/dev/null || find . -maxdepth 3 -not -path '*/node_modules/*' -not -path '*/venv/*' -not -path '*/__pycache__/*' | head -30

