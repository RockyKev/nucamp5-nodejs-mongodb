## how to get up and running

1. Open up two terminals.

2. The first terminal, you have to start mongodb

```
Visit your mongodb folder
cd "/home/rocky/Documents/nucamp5-nodejs-mongoServer/"

then
[WINDOWS]
mongod --dbpath=data --bind_ip 127.0.0.1

[LINUX]
The MongoDB service should automatically be started on install, but to check the status type
sudo systemctl status mongodb
sudo systemctl stop mongodb
sudo systemctl start mongodb
sudo systemctl restart mongodb

https://itsfoss.com/install-mongodb-ubuntu/#install-from-ubuntu-repository

```

3. In the second terminal, visit this project and npm start.
