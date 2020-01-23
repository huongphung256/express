var express = require('express');
var bodyParser = require('body-parser');
var userRouter = require('./routers/user.router.js');

var port = 3000;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index', {
        name: 'WORLD'
    });
});

app.use(express.static('public'));

app.use('/users', userRouter);

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});