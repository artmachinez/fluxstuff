var Dispatcher = require('../dispatcher.js');
var Constants = require('../Constants/actionsconstants.js');

var Store = function(){
  this.subscribers = [];
  this.allThings = [];
};

Store.prototype.change = function(){
  this.subscribers.forEach(function(el) {el();} );
};

Store.prototype.subscribe = function(cb){
  this.subscribers.push(cb);
};

Store.prototype.bind = function(){
  var that = this;
  Dispatcher.register(function(payload){

    if(payload.eventType === Constants.itemAdded){
      that.allThings.push(payload.thing);
      that.change();
    }

    if(payload.eventType === Constants.loadAllItems){
      that.allThings = payload.allThings || [];
      that.change();
    }

    if(payload.eventType === Constants.clearAll){
      that.allThings = [];
      that.change();
    }
  });
};

module.exports = new Store();
