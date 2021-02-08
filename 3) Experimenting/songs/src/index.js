import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux'; //Import applyMiddleware to apply redux-thunk
import thunk from 'redux-thunk';  //Import redux-thunk

import App from './components/App';
import reducers from './reducers';


//Only comments relating to redux-thunk will be present in this project.  
//for original project and comments refer to "React-training-project\2) React Other Series\3) Advanced State Management"
render (
    <Provider store={createStore((reducers), applyMiddleware(thunk))}>  {/** run the applyMiddleware function to apply redux-thunk */}
        <App/>
    </Provider>, 
    document.querySelector('#root')
);
