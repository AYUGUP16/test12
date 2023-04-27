const express = require('express');
var bodyParser = require('body-parser')
const app = express();
var code = 420;

var urlencodedParser = bodyParser.urlencoded({ extended: false })
const filter = reqFilter = (req, res, next) => {
    if (req.query.code == 420) {

        next();
    }
    else {
        res.send('sorry');
    }
}
const route = express.Router();

route.use(filter);
route.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/submit', urlencodedParser, (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});
app.use('/', route);
app.listen(8001);