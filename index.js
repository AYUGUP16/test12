const { body, validationResult }
    = require('express-validator');
const express = require('express');
var bodyParser = require('body-parser')
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
app.post('/submit', [
    body('firstName')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    body('lastName')
        .not()
        .isEmpty()
        .withMessage('lastName is required'),
    body('email').isEmail().normalizeEmail(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json(errors)
    }
    else {
        res.send("Successfully validated")
    }
    res.sendStatus(200);
});
// app.use('/', route);
app.listen(8001);