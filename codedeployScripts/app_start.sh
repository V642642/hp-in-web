echo "app start ;)"
cd /root
#./install.sh
#nvm install 16.15.0
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
. ~/.nvm/nvm.sh
source /root/.bashrc
#source /home/ubuntu/.bashrc
nvm install 16.15.0
#npm install -g pm2

cd /home/ubuntu/www/hp-web
npm install
npm run build
/root/.nvm/versions/node/v16.15.0/bin/pm2 kill
/root/.nvm/versions/node/v16.15.0/bin/pm2 start /root/.nvm/versions/node/v16.15.0/bin/npm -- start
#npm install
#npm run build
#npm run start > /dev/null 2> /dev/null < /dev/null &
