cd hellonode && git checkout master && git pull origin master && sudo chown -R $USER /usr/local/lib/node_modules && sudo npm i -g pm2 && pm2 restart ecosystem.config.js

