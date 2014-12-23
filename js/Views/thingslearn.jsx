/** @jsx React.DOM */

var React = require('react');
var Display = require('./display.jsx');
var AddThing = require('./addthing.jsx');
var ThingsStore = require('../Stores/thingsstore.js');
var ThingsActions = require('../Actions/thingsactions.js');

var View = React.createClass({

  getInitialState: function(){
    return {things: [], currentThing: null}
  },

  componentDidMount: function(){
    var that = this;
    ThingsStore.subscribe(function(){
      that.setState({ things: ThingsStore.allThings, currentThing: that.getRandomItem(ThingsStore.allThings) });
    });
  },

  getRandomItem: function(things){
    if(things && things.length > 1){
      return things[Math.floor(things.length * Math.random())];
    }
    return null;
  },

  setRandomItem: function(){
      this.setState({currentThing: this.getRandomItem(this.state.things)});
  },

  clearItems: function(){
    ThingsActions.clearAll();
  },

  render: function(){
    return <div><h1>Ultimate tool for learning ANYTHING</h1>
      <Display thing={this.state.currentThing}></Display>
      <div>
        <input type="button" className="btn btn-default" value="NEXT!" onClick={this.setRandomItem} ></input>
        <input type="button" className="btn btn-default" value="CLEAR ALL" onClick={this.clearItems} ></input>
      </div>
      <AddThing></AddThing>
      </div>;
  }
});

module.exports = View;
