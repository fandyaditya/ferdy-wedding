const express = require('express');
const app = express();
const route = require('./router');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')
app.use('/', route);
app.use(express.static(__dirname + '/public'));

const server = app.listen(7000, () => {
    console.log("this app is running on server 7000!!")
})