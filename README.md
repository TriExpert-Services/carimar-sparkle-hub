# Welcome to your Lovable project

# Carimar Services LLC - Professional Cleaning Services

A modern, responsive website for Carimar Services LLC, a professional cleaning company based in Tampa, Florida.

## Project info

**URL**: https://lovable.dev/projects/3abc711f-7fa6-456b-9d25-bc53e6b6f335

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
make dev
```

### Production Deployment with Docker

#### Prerequisites
- Docker and Docker Compose installed
- Make (optional, for easier commands)

#### Deploy
```bash
# Quick deployment
make deploy

# Or manually
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

#### Available Commands
```bash
make help          # Show all available commands
make build         # Build Docker image
make prod          # Start production environment
make stop          # Stop all containers
make logs          # Show application logs
make monitor       # Check application health
make backup        # Create backup
make clean         # Clean up Docker resources
```

## 🐳 Docker Configuration

The project includes multiple Docker configurations:

- `Dockerfile` - Multi-stage build for production
- `docker-compose.yml` - Development/testing environment
- `docker-compose.prod.yml` - Production environment
- `nginx.conf` - Optimized Nginx configuration
- `proxy.conf` - Reverse proxy configuration

## 📁 Project Structure

```
carimar-services/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   └── ...
├── scripts/               # Deployment scripts
│   ├── deploy.sh          # Deployment script
│   ├── backup.sh          # Backup script
│   └── monitor.sh         # Monitoring script
├── docker-compose.yml     # Docker Compose config
├── docker-compose.prod.yml # Production config
├── Dockerfile             # Docker build instructions
├── nginx.conf             # Nginx configuration
└── Makefile              # Build automation
```

## 🔧 Configuration

### Environment Variables
- `NODE_ENV` - Environment (development/production)
- `TZ` - Timezone (default: America/New_York)

### Nginx Features
- Gzip compression
- Security headers
- Static asset caching
- Client-side routing support
- Health check endpoint

## 📊 Monitoring

The application includes:
- Health check endpoint at `/health`
- Container health checks
- Monitoring script for system status
- Automated log rotation

## 🔒 Security Features

- Non-root user in Docker container
- Security headers (CSP, HSTS, etc.)
- Sensitive file blocking
- Server tokens disabled

## 🚀 Deployment Options

### Local Development
```bash
npm run dev
```

### Docker Development
```bash
docker-compose up
```

### Production Deployment
```bash
# Using Make
make deploy

# Using Docker Compose directly
docker-compose -f docker-compose.prod.yml up -d
```

## 📝 Maintenance

### Backups
```bash
make backup
```

### Monitoring
```bash
make monitor
```

### Logs
```bash
make logs
```

### Updates
```bash
make update
```

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3abc711f-7fa6-456b-9d25-bc53e6b6f335) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Docker & Docker Compose
- Nginx

## How can I deploy this project?

### Option 1: Lovable Platform
Simply open [Lovable](https://lovable.dev/projects/3abc711f-7fa6-456b-9d25-bc53e6b6f335) and click on Share -> Publish.

### Option 2: Docker Deployment
Use the included Docker configuration for production deployment:

```bash
# Quick deployment
make deploy

# Or step by step
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d
```

### Option 3: Manual Build
```bash
npm run build
# Deploy the dist/ folder to your web server
```

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 📞 Contact

**Carimar Services LLC**
- 📧 Email: support@carimarservices.com
- 📱 Phone: (813) 802-7696
- 🌐 Website: carimarservices.com
- 📍 Location: Tampa, Florida
