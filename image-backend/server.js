// require('dotenv').config()
process.env.DB_USER='Akki';
process.env.DB_PASSWORD='Akshit1234';
process.env.DB_NAME='Image-Database';
const mongoose = require('mongoose');
const app = require('./app.js');
const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.lmvmcg6.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'

let dbLink = url.replace("$_USERNAME_$", process.env.DB_USER);
dbLink = dbLink.replace("$_PASSWORD_$", process.env.DB_PASSWORD);
dbLink = dbLink.replace("$_DB_NAME_$", process.env.DB_NAME);

mongoose.connect(dbLink).then(() => {
  console.log('-------- Database Connected --------');
});

app.listen(1400,() => {
    console.log('----------- App Started -----------')
});