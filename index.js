const { body, validationResult }
    = require('express-validator');
const express = require('express');
var bodyParser = require('body-parser');
const { hidden } = require('colors');
const app = express();
var code = 420;

var urlencodedParser = bodyParser.urlencoded({ extended: false })
// const filter = reqFilter = (req, res, next) => {
//     if (req.query.code == 420) {

//         next();
//     }
//     else {
//         res.send('sorry');
//     }
// }
// const route = express.Router();

// route.use(filter);
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
// app.get('/', (req, res, next) => {
//     res.sendFile(__dirname + '/index.html');
// });

app.listen(8001);



