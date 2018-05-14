pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('error') {
      steps {
        sh 'npm install'
      }
    }
  }
}