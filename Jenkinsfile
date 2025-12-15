pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/somkhan815-cmd/siemreap_project.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Run Services') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}
