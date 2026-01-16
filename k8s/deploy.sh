#!/bin/bash
set -e

echo "Deploying CoffeeShop to Kubernetes..."

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

if ! command -v kubectl &> /dev/null; then
    echo -e "${RED}kubectl not found. Please install kubectl first.${NC}"
    exit 1
fi

if ! kubectl cluster-info &> /dev/null; then
    echo -e "${RED}Cannot connect to Kubernetes cluster.${NC}"
    exit 1
fi

echo -e "${GREEN}Connected to Kubernetes cluster${NC}"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo -e "${YELLOW}Creating namespace...${NC}"
kubectl apply -f namespace.yaml

if command -v docker &> /dev/null; then
    echo -e "${YELLOW}Building Docker image...${NC}"
    cd ../coffeeshop-web
    docker build -t coffeeshop-web:latest .
    cd "$SCRIPT_DIR"
    
    if command -v minikube &> /dev/null; then
        echo -e "${YELLOW}Loading image to Minikube...${NC}"
        minikube image load coffeeshop-web:latest
    fi
fi

echo -e "${YELLOW}Deploying application...${NC}"
kubectl apply -f web-deployment.yaml

echo -e "${YELLOW}Applying HPA...${NC}"
kubectl apply -f web-hpa.yaml

echo -e "${YELLOW}Applying Ingress...${NC}"
kubectl apply -f ingress.yaml

echo -e "${YELLOW}Deploying monitoring stack...${NC}"
kubectl apply -f monitoring/

echo -e "${YELLOW}Waiting for deployment...${NC}"
kubectl rollout status deployment/coffeeshop-web -n coffeeshop --timeout=120s

echo -e "${GREEN}Deployment completed!${NC}"
echo ""
echo "Deployment Status:"
kubectl get deployments -n coffeeshop
echo ""
echo "Pods Status:"
kubectl get pods -n coffeeshop
echo ""
echo "Services:"
kubectl get services -n coffeeshop
echo ""
echo "HPA Status:"
kubectl get hpa -n coffeeshop
echo ""
echo "Ingress:"
kubectl get ingress -n coffeeshop
echo ""
echo -e "${GREEN}CoffeeShop deployed successfully!${NC}"
echo ""
echo "Access URLs:"
echo "  - Website:    http://coffeeshop.local"
echo "  - Prometheus: http://localhost:30090"
echo "  - Grafana:    http://localhost:30030 (admin/admin123)"
