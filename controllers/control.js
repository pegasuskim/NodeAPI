'use strict';
var global = require('../common');
var rabbitmq = require('../handler/rabbitmq');

var DataControl = exports;
var self = DataControl;

DataControl.mq_messagepush = function(callback) {
 /*
      var result = {};
      var mqueue = new rabbitmq({"readyqueue":global.config.mqueue.mq});
      var qName = global.config.qname;

      var data = {
            'test': "mq_message",
            'data' : info
      };
      mqueue.publish(qName, data); */

      callback("TEST OK");
};

