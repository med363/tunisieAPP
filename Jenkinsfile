pipeline {
    agent {
    docker {image "nodejs"}
    }
    environment{
  NEW_VERSION ='1.1.1'
  }
//   SERVER_CREDENTIALS = credentials('serverCredentials')
    
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
                sh "curl http://localhost:3000" 
            }
        }

    }
    
}
