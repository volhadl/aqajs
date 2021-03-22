pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        git 'https://github.com/volhadl/aqajs.git'
        nodejs('node') {
          sh 'npm install'
          sh 'npm run cypress:test '
        }
      }
      post {
      always {
          junit testResults: '**/results/*.xml'
      }
    } 
  }
  }
}