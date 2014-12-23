var Dispatcher = function (){ this._subscribers = []; };

Dispatcher.prototype.register = function(cb){
  this._subscribers.push(cb);
};


Dispatcher.prototype.dispatch = function(payload) {
  this._subscribers.forEach(function(el){ el(payload) });
}

module.exports = new Dispatcher();
