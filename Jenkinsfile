pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        git 'https://github.com/volhadl/aqajs.git'
        nodejs('node') {
          sh 'npm install'
          sh 'npm run clean:reports'
          sh 'npx cypress run --headless --browser chrome'
          sh 'npx mochawesome-merge cypress/reports/*.json -o cypress/reports/output.json'
          sh 'npx marge cypress/reports/output.json --reportDir ./cypress/reports/ --inline'

        }
      }
      post {
      always {
          junit 'reports/junit-combined-report.xml'
      }
    } 
  }
  }
}