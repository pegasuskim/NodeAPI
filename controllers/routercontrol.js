'use strict';
var global = require('../common');
var async = require('async');
var request = require('request');

var rabbitmq = require('../handler/rabbitmq');


exports.router_control = function(req, res) {
      // https://www.npmjs.com/package/request
      request('http://www.google.com', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                  console.log(body)
            }
      });
/*
      var test_url = global.config.towerhost + 'test/test_info';
      request.post({ url:test_url, form:{ 'memory': info } }  ,function (err, res, body) {
            if (err){
                  global.log.error("request modules ERROR ");
                  return cb(err);
            }else{
                  var resData = JSON.parse(body);
                  global.log.debug("resData: ", resData);
            }
      });
*/
};


exports.mq_messagepush = function(req, res) {
      var mqueue = new rabbitmq({"readyqueue":global.config.mqueue.mq});
      var qName = global.config.qname;

      var data = {
            'test': "mq_message",
            'data' : info
      };
      mqueue.publish(qName, data);
};


exports.sql_datacontrol = function(req, res) {

};






