pipeline
agent any
enviroment{
  NEW_VERSION ='1.1.1'
  SERVER_CREDENTIALS = credentials('serverCredentials')
stages{
  satge('build'){
    steps {
      echo 'building the app...'
      echo "build version ${NEW_VERSION}"
      sh 'npm i' }
  }
  stage('test'){
    steps{
    echo 'testing the app...
    }
  }
  stage('deploy'){
    steps {
  echo 'deploying the app ...'
      sh "${SERVER_CREDENTIALS}"
    }
  }
  }
