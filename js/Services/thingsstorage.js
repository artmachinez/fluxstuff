var ThingsStorage = {
  getAllThings: function(){
    if(!window.localStorage.Things){
      return [];
    }
    return JSON.parse(window.localStorage.Things);
  },

  setAllThings: function(things){
    window.localStorage.Things = JSON.stringify(things);
  },

  addThing: function(thing){
    var allThings = this.getAllThings() || [];
    allThings.push(thing);
    this.setAllThings(allThings);
  },

  clearAll: function(){
    delete(window.localStorage.Things);
  },
};


module.exports = ThingsStorage;
