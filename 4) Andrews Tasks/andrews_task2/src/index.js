import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import App from './components/App';
import allReducers from './reducers';

const history = createBrowserHistory();  //not actually being used though

ReactDom.render(
    <Provider store={createStore(allReducers(history))}>
        <App />
    </Provider>,
    document.getElementById('root')
);