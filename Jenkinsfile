pipeline {
    agent any
    tools {
        nodejs "node"
    }

    stages {
        stage('Setup') {
            steps {
                dir('directoryToDelete') {
                    deleteDir()
                }
            }
        }

        stage('Test') {
            steps {
                sh 'export PATH=/usr/local/bin'
                sh 'npm install'
                sh 'npm run clean:reports'
                sh 'npx cypress run --headless --browser chrome || true'
                sh 'npm "cypress:report"'
                sh 'npm run "cypress:junit"'
            }
        }
    }

    post {
        always {
            junit 'cypress/reports/junit-combined-report.xml'
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'ma-report.html', reportName: 'ma-report', reportTitles: ''])
        }
    }
}