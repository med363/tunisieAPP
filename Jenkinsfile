pipeline {
    environment{
  NEW_VERSION ='1.1.1'
  imagename = 'myweb1'
  registryCredential = 'mohamedamineblibech'
  dockerImage = ''

  }
//   SERVER_CREDENTIALS = credentials('serverCredentials')
    agent any{
    stages{
        stage ("cloning") {
            steps{
                echo "cloning"
               sh "git clone https://github.com/med363/tunisieAPP.git"
            }
        }
        stage ("Install dependenciess"){
            steps{
                echo "installing dependencies"
                sh "npm i npm@latest -g"
                sh "cd the-example-app.nodejs && npm install"
            }
        }
        
        stage('Building image') {
           steps{
             script {
                    dockerImage = docker.build imagename
                    }
                }                   
            }
        
        stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
             dockerImage.push('latest')

          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $imagename:$BUILD_NUMBER"
         sh "docker rmi $imagename:latest"

      }
    }
        stage ("Deploy"){
            steps{
                echo "build version ${NEW_VERSION}"
                echo "start project"
                sh "cd the-example-app.nodejs && npm run start:dev &"
            }
        }
        stage ("Test"){
            steps{
                echo "verify"
                sh "curl http://localhost:5000" 
            }
        }

    }
    
}
