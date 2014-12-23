var React = require('react');
var Store = require('./Stores/thingsstore.js');
var MainComponent = require('./Views/thingslearn.jsx');
var ThingsAction = require('./Actions/thingsactions.js');

React.render(<MainComponent></MainComponent>, document.getElementById('content'));

Store.bind();
ThingsAction.loadAllThings();
