#!/bin/bash

# Carimar Services Monitoring Script

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

# Check application health
check_health() {
    local url="http://localhost/health"
    local response=$(curl -s -o /dev/null -w "%{http_code}" $url 2>/dev/null)
    
    if [ "$response" = "200" ]; then
        log_info "✅ Application is healthy"
        return 0
    else
        log_error "❌ Application health check failed (HTTP $response)"
        return 1
    fi
}

# Check container status
check_containers() {
    local running=$(docker-compose -f docker-compose.prod.yml ps -q | wc -l)
    local total=$(docker-compose -f docker-compose.prod.yml config --services | wc -l)
    
    if [ "$running" -eq "$total" ]; then
        log_info "✅ All containers are running ($running/$total)"
        return 0
    else
        log_error "❌ Some containers are not running ($running/$total)"
        return 1
    fi
}

# Check disk space
check_disk_space() {
    local usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
    
    if [ "$usage" -lt 80 ]; then
        log_info "✅ Disk usage is normal ($usage%)"
        return 0
    elif [ "$usage" -lt 90 ]; then
        log_warn "⚠️  Disk usage is high ($usage%)"
        return 1
    else
        log_error "❌ Disk usage is critical ($usage%)"
        return 2
    fi
}

# Main monitoring function
main() {
    echo "🔍 Carimar Services Health Check - $(date)"
    echo "================================================"
    
    local exit_code=0
    
    # Check containers
    if ! check_containers; then
        exit_code=1
    fi
    
    # Check application health
    if ! check_health; then
        exit_code=1
    fi
    
    # Check disk space
    if ! check_disk_space; then
        if [ $? -eq 2 ]; then
            exit_code=2
        fi
    fi
    
    echo "================================================"
    
    if [ $exit_code -eq 0 ]; then
        log_info "🎉 All systems operational!"
    elif [ $exit_code -eq 1 ]; then
        log_warn "⚠️  Some issues detected"
    else
        log_error "🚨 Critical issues detected"
    fi
    
    exit $exit_code
}

# Run monitoring
main