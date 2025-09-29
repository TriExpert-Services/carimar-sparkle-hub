#!/bin/bash

# Carimar Services Backup Script
set -e

# Configuration
BACKUP_DIR="./backups"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="carimar_backup_$DATE"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

# Create backup directory
mkdir -p $BACKUP_DIR

log_info "Creating backup: $BACKUP_NAME"

# Create backup archive
tar -czf "$BACKUP_DIR/$BACKUP_NAME.tar.gz" \
    --exclude='node_modules' \
    --exclude='dist' \
    --exclude='logs' \
    --exclude='.git' \
    --exclude='backups' \
    .

log_info "✅ Backup created: $BACKUP_DIR/$BACKUP_NAME.tar.gz"

# Keep only last 5 backups
cd $BACKUP_DIR
ls -t carimar_backup_*.tar.gz | tail -n +6 | xargs -r rm --

log_info "🧹 Old backups cleaned up (keeping last 5)"