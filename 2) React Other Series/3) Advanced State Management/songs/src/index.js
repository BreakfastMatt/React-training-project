import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';  //this is a component from 'react-redux'
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

render (
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>, 
    document.querySelector('#root')
); //we don't use curly braces with the render call made inside index.js
