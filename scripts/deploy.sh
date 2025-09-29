#!/bin/bash

# Carimar Services Deployment Script
set -e

echo "🚀 Starting Carimar Services deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
COMPOSE_FILE="docker-compose.prod.yml"
APP_NAME="carimar-cleaning"

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    log_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Check if docker-compose is available
if ! command -v docker-compose &> /dev/null; then
    log_error "docker-compose is not installed. Please install it and try again."
    exit 1
fi

# Create logs directory
mkdir -p logs

# Build and deploy
log_info "Building Docker image..."
docker-compose -f $COMPOSE_FILE build --no-cache

log_info "Stopping existing containers..."
docker-compose -f $COMPOSE_FILE down

log_info "Starting new containers..."
docker-compose -f $COMPOSE_FILE up -d

# Wait for health check
log_info "Waiting for application to be healthy..."
sleep 10

# Check if the application is running
if docker-compose -f $COMPOSE_FILE ps | grep -q "Up"; then
    log_info "✅ Deployment successful!"
    log_info "Application is running at: http://localhost"
    log_info "Health check: http://localhost/health"
else
    log_error "❌ Deployment failed!"
    log_error "Check logs with: docker-compose -f $COMPOSE_FILE logs"
    exit 1
fi

# Show running containers
log_info "Running containers:"
docker-compose -f $COMPOSE_FILE ps

echo ""
log_info "🎉 Carimar Services is now live!"
echo ""