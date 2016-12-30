var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

console.log(store);

store.subscribe(() => {
  console.log('New state ', store.getState());
});

store.dispatch(actions.addTodo('Cleans the yard'));

store.dispatch(actions.setSearchText('year'));

store.dispatch(actions.toggleShowCompleted());
// Load foundation
//require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
    document.getElementById('app')
);
