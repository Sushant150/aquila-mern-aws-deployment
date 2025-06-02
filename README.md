
# Aquila MERN App Deployment on AWS

A production-ready 3-tier MERN application deployed on AWS with enhanced security using private subnets, auto-scaling, and infrastructure as code.

## 🏗️ Architecture Overview

```
Internet Gateway
    ↓
Application Load Balancer (Public Subnet)
    ↓
React Frontend (Private Subnet - Auto Scaling Group)
    ↓
Node.js Backend API (Private Subnet - Auto Scaling Group)
    ↓
MongoDB Atlas (External Database)
```

## 🚀 Features

- **Security First**: Private subnet architecture with NAT Gateway
- **Auto-scaling**: Automatic horizontal scaling based on CPU/memory metrics
- **Load Balancing**: Application Load Balancer with health checks
- **CI/CD Pipeline**: Jenkins automation for seamless deployments
- **Infrastructure as Code**: Terraform for reproducible infrastructure
- **Monitoring**: CloudWatch integration for performance metrics

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Infrastructure**: AWS (EC2, VPC, ALB, Auto Scaling)
- **IaC**: Terraform
- **CI/CD**: Jenkins
- **Monitoring**: AWS CloudWatch

## 📁 Project Structure

```
aquila-mern-aws/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── package.json
│   └── Dockerfile
├── infrastructure/
│   ├── terraform/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── modules/
│   └── scripts/
├── ci-cd/
│   ├── Jenkinsfile
│   └── deploy.sh
└── README.md
```

## 🔧 Infrastructure Components

### VPC Configuration
- Custom VPC with public/private subnets across 2 AZs
- Internet Gateway for public subnet access
- NAT Gateway for private subnet internet access
- Route tables with proper routing

### Security Groups
- ALB Security Group: HTTP/HTTPS from internet
- Frontend SG: HTTP from ALB only
- Backend SG: API access from Frontend only
- Database SG: MongoDB access from Backend only

### Auto Scaling Groups
- Frontend ASG: 2-6 instances based on CPU utilization
- Backend ASG: 2-4 instances based on memory utilization
- Launch templates with user data scripts

## 🚀 Deployment Guide

### Prerequisites
- AWS CLI configured
- Terraform installed
- Docker installed
- MongoDB Atlas account

### 1. Infrastructure Deployment
```bash
cd infrastructure/terraform
terraform init
terraform plan
terraform apply
```

### 2. Application Deployment
```bash
# Build and push Docker images
docker build -t aquila-frontend ./frontend
docker build -t aquila-backend ./backend

# Deploy via Jenkins or manual
./ci-cd/deploy.sh
```

### 3. Environment Variables
```bash
# Backend
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
PORT=3000

# Frontend
REACT_APP_API_URL=https://api.aquila-app.com
```

## 📊 Monitoring & Logging

- CloudWatch dashboards for application metrics
- ALB access logs stored in S3
- Application logs via CloudWatch Logs
- Custom metrics for business KPIs

## 🔐 Security Features

- Private subnets for application tier
- Security groups with least privilege access
- SSL/TLS termination at load balancer
- IAM roles with minimal permissions
- VPC Flow Logs enabled

## 📈 Performance Optimizations

- Auto-scaling based on CloudWatch metrics
- Application Load Balancer with health checks
- CDN integration for static assets
- Database connection pooling
- Redis caching layer (optional)

## 🔄 CI/CD Pipeline

Jenkins pipeline includes:
1. Code checkout from Git
2. Run unit tests
3. Build Docker images
4. Push to ECR
5. Deploy to staging
6. Run integration tests
7. Deploy to production
8. Post-deployment health checks

## 🌐 Live Demo

🔗 **Live Application**: [https://aquila-app.buildwithsushant.com](https://aquila-app.buildwithsushant.com)

## 📞 Support

For questions or issues, please contact [buildwithsushant@gmail.com](mailto:buildwithsushant@gmail.com)

---

**Built with ❤️ by Sushant Kumar**
