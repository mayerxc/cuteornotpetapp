import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { unregister } from "./registerServiceWorker";
import Profile from './Components/Profile';
import Rankings from './Components/Rankings'
//Added below for redux store
import {applyMiddleware, createStore, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute,browserHistory} from 'react-router';


import Main from './Components/main' //wrapper to pass authentication info downstream

//import combined reducer to pass to store here
import reducers from './reducers/index'

//use logger for debugging only
const middleware = applyMiddleware(thunk,logger, )
//const middleware = applyMiddleware(thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(middleware));


//decalre all routes of application below
const Routes = (
<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={App}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/rankings" component={Rankings}/>
    </Route>
  </Router>
</Provider>
)

//end redux

ReactDOM.render(Routes, document.getElementById("root"));
unregister();
