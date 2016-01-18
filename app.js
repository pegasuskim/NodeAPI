'use strict';
var global = require('./common');
process.env.TZ = 'Asia/Seoul';

var connectRoute = require('connect-route');
var connect = require('connect');

var app = connect();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// router
var router = require('./routes');
router.route(app);

module.exports = app;
