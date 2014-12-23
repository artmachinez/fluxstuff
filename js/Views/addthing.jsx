/** @jsx React.DOM */
var React = require('react');
var ThingsActions = require('../Actions/thingsactions.js');
var Dispatcher = require('../dispatcher.js');

var View = React.createClass({



  handleClick: function(event){

    // Get values from controls
    var thingKey = this.refs.thingKey.getDOMNode().value;
    var thingValue = this.refs.thingValue.getDOMNode().value;

    // TODO: validation
    if(thingKey && thingValue){
      ThingsActions.addThing({
        thingKey: thingKey,
        thingValue: thingValue,
        });
    }
  },

  render: function(){
    return <div>
      <h3>Add your new item here</h3>
      <div className="form-inline">
          <div className="form-group">
            <input type="text" ref="thingKey" placeholder="Key"></input>
          </div>
          <div className="form-group">
            <input type="text" ref="thingValue" placeholder="Value"></input>
          </div>
          <input type='button' className="btn btn-default" onClick={this.handleClick} value='Add thing'></input>
        </div>
      </div>;
  }
});

module.exports = View;
