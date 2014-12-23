var Constants = require('../Constants/actionsconstants.js');
var Storage = require('../Services/thingsstorage.js');
var Dispatcher = require('../dispatcher.js');


var ThingsActions = function(){};

ThingsActions.prototype.loadAllThings = function(){
  // Load the things from local storage
  var allThings = Storage.getAllThings();

  // Call dispatcher with Constants.loadAll action string
  Dispatcher.dispatch({eventType: Constants.loadAllItems, allThings: allThings});
};

ThingsActions.prototype.addThing = function(thing){
  // Save to store and asynchronously send to the dispatcher

  Storage.addThing(thing);

  Dispatcher.dispatch({
    eventType: Constants.itemAdded,
    thing: thing});
};

ThingsActions.prototype.clearAll = function(){
  Storage.clearAll();

  Dispatcher.dispatch({
    eventType: Constants.clearAll
    });
};

module.exports = new ThingsActions();
