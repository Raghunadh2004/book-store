pipeline{
    agent any
    environment{
        MONGO="mongodb+srv://maturiraghunadh:PpCT2VGz3HfB7VKJ@cluster0.gxbg6.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0"
        JWT="87245759fe82aacdacb9d9bd672170fee7266b0f24d3acc329e4a498288ae20f86a1f5dc12f9090fa73b488318f42df77ff94b50bf41ce0c773237269d814f03"
    }
    stages{
        stage('Clone Git'){
            steps{
                git 'https://github.com/Raghunadh2004/book-store.git'
            }
        }
    }
}
