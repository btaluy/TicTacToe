pipeline {
  agent any
  stages {
    stage('npm install') {
      steps {
        withNPM(npmrcConfig: 'my-custom-npmrc') {
          echo 'Performing npm build...'
          sh 'npm install'
        }

      }
    }
  }
}