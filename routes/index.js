'use strict';
var request = require('request');
var connectRoute = require('connect-route');
var DataControl = require('../controllers/control');

var routes = function(app) {
   // Route sampling
   app.use(connectRoute(function (router) {
      router.get('/', function (req, res, next) {
         // function call test
         DataControl.mq_messagepush( function (err){
            res.end(err);
         });
      });

      router.get('/home', function (req, res, next) {
         //somethoing job ...
         res.end('home');
      });

      router.get('/home/:id', function (req, res, next) {
         //somethoing job ...
         res.end('home ' + req.params.id);
      });

      router.post('/home', function (req, res, next) {
         //somethoing job ...
         res.end('POST to home');
      });


   }));
};

exports.route = routes;
