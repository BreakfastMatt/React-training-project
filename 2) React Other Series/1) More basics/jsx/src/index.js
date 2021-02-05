//File name is important
//This one is different from the other components we make (since it has the ReactDOM in here). 

import React from 'react';
import {render} from "react-dom";
//import ReactDOM from 'react-dom';

const App = function() {  // App = () => {...}
    return (
        <div> Test </div>
    );
};

render(  //ReactDOM.render(...);
    <App />,
    document.querySelector('#root')  //gets reference to div with id "root"
);