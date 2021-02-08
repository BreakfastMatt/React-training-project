import React from 'react';
import {render} from 'react-dom';
import thunk from 'redux-thunk';  //this is the redux thunk library that can be used to call an action that returns a function (allowing for delayed actions such as our api call)
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';  //applyMiddleware is imported here and used to apply the redux-thunk middleware.

import {App} from "./components/App";
import reducers from "./reducers/"


render (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}> <App/> </Provider>, 
    document.querySelector('#root')
); 
