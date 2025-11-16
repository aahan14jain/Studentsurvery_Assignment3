pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-cred')
        DOCKER_USERNAME = 'aahanjain1411'
        BACKEND_IMAGE = 'aahanjain1411/survey-backend'
        FRONTEND_IMAGE = 'aahanjain1411/survey-frontend'
        PATH = "${env.PATH}:/Users/aahanjain/.rd/bin"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/aahan14jain/Studentsurvery_Assignment3.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                sh '''
                cd Studentsurvery_Assignment3/backend
                docker build -t $BACKEND_IMAGE:latest .
                '''
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh '''
                cd Studentsurvery_Assignment3/frontend
                # Frontend will use /api which nginx will proxy to backend service
                docker build -t $FRONTEND_IMAGE:latest .
                '''
            }
        }

        stage('Docker Login') {
            steps {
                sh '''
                echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                '''
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                sh '''
                docker push $BACKEND_IMAGE:latest
                docker push $FRONTEND_IMAGE:latest
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f Studentsurvery_Assignment3/k8s/backend-deployment.yaml
                kubectl apply -f Studentsurvery_Assignment3/k8s/backend-service.yaml
                kubectl apply -f Studentsurvery_Assignment3/k8s/frontend-deployment.yaml
                kubectl apply -f Studentsurvery_Assignment3/k8s/frontend-service.yaml

                # Restart Pods
                kubectl rollout restart deployment/survey-backend
                kubectl rollout restart deployment/survey-frontend
                '''
            }
        }
    }
}
