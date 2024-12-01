pipeline {
    agent any
    environment {
        MONGO = "mongodb+srv://maturiraghunadh:PpCT2VGz3HfB7VKJ@cluster0.gxbg6.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0"
        JWT = "87245759fe82aacdacb9d9bd672170fee7266b0f24d3acc329e4a498288ae20f86a1f5dc12f9090fa73b488318f42df77ff94b50bf41ce0c773237269d814f03"
    }
    stages {
        stage('Clone Git') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Raghunadh2004/book-store.git'
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    sh "npm install"
                }
            }
        }

        stage('Backend Build') {
            steps {
                dir('backend') {
                    sh "npm install"
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t frontend-image -f ./frontend/Dockerfile ./frontend'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t backend-image -f ./backend/Dockerfile ./backend'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DockerHubCred', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh """
                            docker login --username ${DOCKER_USERNAME} --password ${DOCKER_PASSWORD}
                            docker tag frontend-image ${DOCKER_USERNAME}/frontend-image:latest
                            docker push ${DOCKER_USERNAME}/frontend-image:latest
                            docker tag backend-image ${DOCKER_USERNAME}/backend-image:latest
                            docker push ${DOCKER_USERNAME}/backend-image:latest
                            docker rmi backend-image
                            docker rmi frontend-image
                        """
                    }
                }
            }
        }
    
        stage('Clean Docker Images'){
            steps{
                script{
                    sh 'docker container prune -f'
                    sh 'docker image prune -f'
                }
            }
        }

        
    }
}
