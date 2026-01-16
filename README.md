# CoffeeShop

Aplikasi CoffeeShop dengan Website (Next.js) dan Mobile App (Flutter).

## Struktur Project

```
├── coffeeshop-web/          # Website (Next.js)
├── coffeshop-app/           # Mobile App (Flutter)
├── k8s/                     # Kubernetes manifests
│   ├── namespace.yaml
│   ├── web-deployment.yaml
│   ├── web-hpa.yaml
│   ├── ingress.yaml
│   ├── deploy.sh
│   └── monitoring/
└── .github/workflows/       # CI/CD Pipeline
```

## Tech Stack

- **Website**: Next.js 14, Tailwind CSS
- **Mobile**: Flutter 3.27
- **Container**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana

## Quick Start

### Prerequisites

```bash
brew install minikube kubectl
brew install --cask docker
```

### Deploy to Kubernetes

```bash
# Start cluster
minikube start --cpus=4 --memory=8192 --driver=docker
minikube addons enable ingress
minikube addons enable metrics-server

# Build image
eval $(minikube docker-env)
cd coffeeshop-web && docker build -t coffeeshop-web:latest .

# Deploy
cd ../k8s && ./deploy.sh

# Access (run in separate terminal)
minikube tunnel
```

### Access URLs

| Service | URL |
|---------|-----|
| Website | http://coffeeshop.local |
| Prometheus | http://localhost:30090 |
| Grafana | http://localhost:30030 (admin/admin123) |

## Kubernetes Components

| Component | File | Description |
|-----------|------|-------------|
| Deployment | `web-deployment.yaml` | Runs 2 replicas of the web app |
| HPA | `web-hpa.yaml` | Auto-scales 2-10 pods based on CPU/Memory |
| Ingress | `ingress.yaml` | Routes traffic to the service |
| Monitoring | `monitoring/*.yaml` | Prometheus + Grafana stack |

## CI/CD Pipeline

Pipeline triggers on push to `main`/`master`:

1. **Build** - Install deps, lint, build
2. **Docker** - Build and push image to GHCR
3. **Deploy** - Apply manifests to Kubernetes

## Commands

```bash
# Check pods
kubectl get pods -n coffeeshop

# Check HPA
kubectl get hpa -n coffeeshop

# View logs
kubectl logs -f deployment/coffeeshop-web -n coffeeshop

# Delete all
kubectl delete namespace coffeeshop
```
