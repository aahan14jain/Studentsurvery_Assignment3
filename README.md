# Student Survey Full Stack Application — FastAPI + React + Docker + Kubernetes + Jenkins

## 👥 **AUTHORS**

### **Aahan Jain[G015022443], Aditya Samir Vaidya[G01501989]**

---

A full-stack web application for collecting and managing student survey submissions. The application allows students to submit surveys about their campus experience, and administrators can view, edit, and delete survey responses.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Local Development](#local-development)
  - [Docker Deployment](#docker-deployment)
  - [Kubernetes Deployment](#kubernetes-deployment)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [CI/CD Pipeline](#cicd-pipeline)
- [Links and Resources](#links-and-resources)

## 🎯 Project Overview

This application is a complete full-stack solution for managing student surveys. It consists of:

- **Backend**: FastAPI REST API with SQLite database
- **Frontend**: React application with TypeScript support
- **Containerization**: Docker and Docker Compose
- **Orchestration**: Kubernetes deployments and services
- **CI/CD**: Jenkins pipeline for automated builds and deployments

## ✨ Features

- **Survey Submission**: Students can submit surveys with personal information and preferences
- **View Results**: Display all submitted surveys in a table format
- **Edit Surveys**: Update existing survey submissions
- **Delete Surveys**: Remove survey entries with confirmation
- **Responsive UI**: Modern, user-friendly interface built with React and Bootstrap
- **RESTful API**: Complete CRUD operations via FastAPI
- **Containerized**: Easy deployment with Docker
- **Scalable**: Kubernetes-ready for production environments

## 🛠 Tech Stack

### Backend
- **FastAPI**: Modern Python web framework
- **SQLModel**: SQL database ORM
- **SQLite**: Lightweight database
- **Uvicorn**: ASGI server

### Frontend
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **React Router**: Client-side routing
- **Bootstrap**: CSS framework
- **Vite**: Build tool and dev server
- **Nginx**: Production web server

### DevOps
- **Docker**: Containerization
- **Docker Compose**: Multi-container orchestration
- **Kubernetes**: Container orchestration
- **Jenkins**: CI/CD pipeline

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.11+**: [Download Python](https://www.python.org/downloads/)
- **Node.js 20+**: [Download Node.js](https://nodejs.org/)
- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)
- **Kubernetes**: [Install Kubernetes](https://kubernetes.io/docs/setup/)
- **kubectl**: [Install kubectl](https://kubernetes.io/docs/tasks/tools/)
- **Jenkins**: [Install Jenkins](https://www.jenkins.io/doc/book/installing/)

## 🚀 Installation

### Local Development

#### Backend Setup

1. Navigate to the backend directory:
```bash
cd Studentsurvery_Assignment3/backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the backend server:
```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

The API will be available at `http://127.0.0.1:8000`
API documentation: `http://127.0.0.1:8000/docs`

#### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd Studentsurvery_Assignment3/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5174`

### Docker Deployment

#### Using Docker Compose (Recommended)

1. Navigate to the project root:
```bash
cd Studentsurvery_Assignment3
```

2. Build and start all services:
```bash
docker-compose up --build
```

3. Access the application:
   - Frontend: `http://localhost:5174`
   - Backend API: `http://localhost:8000`
   - API Docs: `http://localhost:8000/docs`

4. Stop the services:
```bash
docker-compose down
```

#### Individual Docker Containers

**Backend:**
```bash
cd Studentsurvery_Assignment3/backend
docker build -t survey-backend:latest .
docker run -p 8000:8000 survey-backend:latest
```

**Frontend:**
```bash
cd Studentsurvery_Assignment3/frontend
docker build -t survey-frontend:latest -f Dockerfile .
docker run -p 80:80 survey-frontend:latest
```

### Kubernetes Deployment

#### Prerequisites
- Kubernetes cluster running (minikube, kind, or cloud provider)
- kubectl configured to access your cluster

#### Deploy to Kubernetes

1. Apply backend deployment and service:
```bash
kubectl apply -f Studentsurvery_Assignment3/k8s/backend-deployment.yaml
kubectl apply -f Studentsurvery_Assignment3/k8s/backend-service.yaml
```

2. Apply frontend deployment and service:
```bash
kubectl apply -f Studentsurvery_Assignment3/k8s/frontend-deployment.yaml
kubectl apply -f Studentsurvery_Assignment3/k8s/frontend-service.yaml
```

3. Check deployment status:
```bash
kubectl get pods
kubectl get svc
```

4. Access the application:
   - Frontend: `http://localhost:30000`
   - Backend: `http://localhost:30001`
   - API Docs: `http://localhost:30001/docs`

#### Update deployments:
```bash
kubectl rollout restart deployment/survey-backend
kubectl rollout restart deployment/survey-frontend
```

## 📁 Project Structure

```
Studentsurvery_Assignment3/
├── backend/
│   ├── main.py              # FastAPI application and endpoints
│   ├── models.py            # SQLModel data models
│   ├── database.py          # Database configuration
│   ├── requirements.txt     # Python dependencies
│   └── Dockerfile           # Backend container image
├── frontend/
│   ├── src/
│   │   ├── main.jsx         # React entry point
│   │   ├── App.jsx          # Main app component with routing
│   │   ├── config.js        # API configuration
│   │   └── components/
│   │       ├── SurveyForm.tsx      # Survey submission form
│   │       ├── SurveyResults.jsx   # Display all surveys
│   │       └── EditSurvey.jsx      # Edit survey component
│   ├── package.json         # Node.js dependencies
│   ├── Dockerfile           # Production frontend image
│   ├── Dockerfile.dev       # Development frontend image
│   └── nginx.conf           # Nginx configuration for production
├── k8s/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
├── docker-compose.yml       # Docker Compose configuration
├── Jenkinsfile              # CI/CD pipeline definition
└── README.md                # This file
```

## 💻 Usage

### Submitting a Survey

1. Navigate to the Survey Form page
2. Fill in all required fields:
   - Personal information (name, address, contact)
   - Survey date
   - Campus preferences (liked most, interested in, recommendation)
3. Click "Submit Survey"

### Viewing Results

1. Click "View Form Results" in the navigation
2. View all submitted surveys in a table
3. Use "Edit" to modify a survey
4. Use "Delete" to remove a survey (with confirmation)

### Editing a Survey

1. From the results page, click "Edit" on any survey
2. Modify the fields as needed
3. Click "Update Survey" to save changes

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/survey` | Create a new survey |
| GET | `/surveys` | Get all surveys |
| GET | `/survey/{id}` | Get a specific survey |
| PUT | `/survey/{id}` | Update a survey |
| DELETE | `/survey/{id}` | Delete a survey |

API Documentation: `http://localhost:8000/docs` (Swagger UI)

## 🔄 CI/CD Pipeline

The project includes a Jenkins pipeline that:

1. **Checks out code** from GitHub
2. **Builds Docker images** for backend and frontend
3. **Pushes images** to Docker Hub
4. **Deploys to Kubernetes** using kubectl
5. **Restarts deployments** to apply changes

### Jenkins Pipeline Setup

1. Create a Jenkins credential named `docker-hub-cred` with your Docker Hub username and password
2. Configure the pipeline to use the Jenkinsfile from the repository
3. Run the pipeline to build and deploy

## 🔗 Links and Resources

### Docker
- **Docker Official Website**: https://www.docker.com/
- **Docker Documentation**: https://docs.docker.com/
- **Docker Hub**: https://hub.docker.com/
- **Docker Compose Documentation**: https://docs.docker.com/compose/
- **Docker Installation Guide**: https://docs.docker.com/get-docker/

### Kubernetes
- **Kubernetes Official Website**: https://kubernetes.io/
- **Kubernetes Documentation**: https://kubernetes.io/docs/home/
- **Kubernetes Installation Guide**: https://kubernetes.io/docs/setup/
- **kubectl Installation**: https://kubernetes.io/docs/tasks/tools/
- **Kubernetes Tutorials**: https://kubernetes.io/docs/tutorials/
- **Minikube (Local Kubernetes)**: https://minikube.sigs.k8s.io/docs/
- **Kind (Kubernetes in Docker)**: https://kind.sigs.k8s.io/

### FastAPI
- **FastAPI Documentation**: https://fastapi.tiangolo.com/
- **FastAPI Tutorial**: https://fastapi.tiangolo.com/tutorial/

### React
- **React Documentation**: https://react.dev/
- **React Router**: https://reactrouter.com/

### Jenkins
- **Jenkins Official Website**: https://www.jenkins.io/
- **Jenkins Documentation**: https://www.jenkins.io/doc/
- **Jenkins Pipeline Syntax**: https://www.jenkins.io/doc/book/pipeline/syntax/



## 🙏 Acknowledgments

- FastAPI for the excellent Python web framework
- React team for the powerful UI library
- Docker and Kubernetes communities for containerization tools

---

**Note**: Make sure to configure environment variables and credentials appropriately for production deployments.
