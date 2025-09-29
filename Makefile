# Carimar Services Makefile

.PHONY: help build dev prod deploy stop clean logs backup monitor

# Default target
help: ## Show this help message
	@echo "Carimar Services - Available commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$\' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Build the Docker image
	@echo "🔨 Building Docker image..."
	@docker-compose -f docker-compose.prod.yml build --no-cache

dev: ## Start development environment
	@echo "🚀 Starting development environment..."
	@npm run dev

prod: ## Start production environment
	@echo "🚀 Starting production environment..."
	@docker-compose -f docker-compose.prod.yml up -d

deploy: ## Deploy the application
	@echo "🚀 Deploying application..."
	@chmod +x scripts/deploy.sh
	@./scripts/deploy.sh

stop: ## Stop all containers
	@echo "🛑 Stopping containers..."
	@docker-compose -f docker-compose.prod.yml down

clean: ## Clean up Docker resources
	@echo "🧹 Cleaning up..."
	@docker-compose -f docker-compose.prod.yml down -v
	@docker system prune -f

logs: ## Show application logs
	@echo "📋 Showing logs..."
	@docker-compose -f docker-compose.prod.yml logs -f

backup: ## Create a backup
	@echo "💾 Creating backup..."
	@chmod +x scripts/backup.sh
	@./scripts/backup.sh

monitor: ## Check application health
	@echo "🔍 Checking application health..."
	@chmod +x scripts/monitor.sh
	@./scripts/monitor.sh

restart: stop prod ## Restart the application

status: ## Show container status
	@echo "📊 Container status:"
	@docker-compose -f docker-compose.prod.yml ps

update: ## Update and redeploy
	@echo "🔄 Updating application..."
	@git pull
	@make deploy