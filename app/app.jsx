var React = require("react");
var ReactDOM = require("react-dom");
var redux = require("redux");
var Provider = require("react-redux").Provider;
var reducer = require("./reducer.jsx");
var AppView = require("./appview.jsx");
var Router1 = require("./router.jsx");
import style from '../style.scss';
var store = redux.createStore(reducer);
 
store.dispatch({
  type: "SET_STATE",
  state: {    
    formText: []
  }
});

 
ReactDOM.render(
  <Provider store={store}>
    <AppView />
  </Provider>,
  document.getElementById("container")
);

ReactDOM.render(
  <Provider store={store}>
    <Router1 />
  </Provider>,
  document.getElementById("router")
);
