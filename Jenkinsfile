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
                sh 'npx mochawesome-merge cypress/reports/*.json -o cypress/reports/output.json'
                sh 'npx marge cypress/reports/output.json --reportDir ./cypress/reports/ --inline'
                sh 'npm run "cypress:junit"'
            }
        }
    }

    post {
        always {
            junit skipPublishingChecks: true, testResults: 'cypress/reports/*.xml'
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/', reportFiles: 'ma-report.html', reportName: 'Mochawesome Report', reportTitles: ''])
        }
    }
}