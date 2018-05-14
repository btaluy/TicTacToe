pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        withNPM(npmrcConfig:'my-custom-npmrc') {
            echo "Performing npm build..."
            sh 'npm install'
        }
      }
    }
  }
}