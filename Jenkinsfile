node {
    def app
    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Deploy to Dev') {
    /*  def git = 'git branch'*/
    /*  def inst = 'cd hellonode\n git fetch --all\n git reset --hard origin/master' */
        def navs = 'sh /home/ubuntu/hellonode/gitscript.sh'
     /* def navss = 'cd hellonode && git checkout master && git pull'*/
      /*  def co1 = ["git", "checkout", "master"]
       /* def co2 = ["git", "pull", "origin", "master"]
     /*   def co3 = ["git", "branch", "-r", "--no-merged", "master"]
      /*  def navs = 'cd hellonode\n git checkout master\n git remote update' */
     /* def comm ='cd hellonode\n git fetch origin\n git checkout master\n git pull\n git branch --set-upstream-to=origin/master master\n git pull'*/
     /* def deploy='cd hellonode\n chmod +x ./publish.sh\n ./publish.sh'*/
 /*def cl = 'git clone https://github.com/damukiran/hellonode.git'*/
      sshagent(['ssh_aws']) {
      sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-13-234-78-67.ap-south-1.compute.amazonaws.com ${navs}"
/* hi hellow how are you*/
          
      }
     }

}
