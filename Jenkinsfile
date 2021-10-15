pipeline{
agent any
environment{
  NEW_VERSION ='1.1.1'
  }
//   SERVER_CREDENTIALS = credentials('serverCredentials')
stages{
  stage('Build'){
    steps {
      echo 'building the app...'
      echo "build version ${NEW_VERSION}"
      sh 'npm i' }
  }
  stage('Test'){
    steps{
    echo 'testing the app...'
    }
  }
  stage('Deploy'){
    steps {
  echo 'deploying the app ...'
//       sh "${SERVER_CREDENTIALS}"
    }
  }
  }
  }
