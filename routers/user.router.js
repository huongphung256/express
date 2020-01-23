var express = require('express');

var controller = require('../controllers/user.controller.js');
var validate = require('../validate/user.validate');

var router = express.Router();

router.get('/', controller.index);


function middleware1(req, res, next) {
    next();
};

function middleware2(req, res, next) {
    res.send('Hello');
};

router.get('/test', middleware1, middleware2);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;