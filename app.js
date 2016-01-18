'use strict';
var global = require('./common');
process.env.TZ = 'Asia/Seoul';

var connectRoute = require('connect-route');
var connect = require('connect');

var app = connect();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var control = require('./controllers/routercontrol.js');

// router
app.use(connectRoute(function (router) {
   router.get('/', function (req, res, next) {

      res.end('index');
   });

   router.get('/home', function (req, res, next) {

      res.end('home');
   });

   router.get('/home/:id', function (req, res, next) {

      res.end('home ' + req.params.id);
   });

   router.post('/home', function (req, res, next) {

      res.end('POST to home');
   });

}));

module.exports = app;
