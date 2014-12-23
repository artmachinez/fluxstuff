/** @jsx React.DOM */
var React = require('react');

var View = React.createClass({
  render: function(){
    if(!this.props.thing)
    {
      return false;
    }

    return <div>
      <h3><span className="label label-primary display-thing-key">{this.props.thing.thingKey}</span></h3>
      <h3><span className="label label-info display-thing-value">{this.props.thing.thingValue}</span></h3>
    </div>;
  }
});

module.exports = View;
