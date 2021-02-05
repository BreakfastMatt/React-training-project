import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from "react-router";
import {createBrowserHistory} from "history";  //browserHistory no longer part of the react-router package

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends React.Component {
  render() {
    return (
    <Router history={createBrowserHistory()}>  
    { /** Routes happen between < and /> of Router :D 
     * * Two routes here */}
       <Route path={"/"} component={Root} />   {/** The Root content will be included at /user and /home since these are appending the / */}
       <hr/>
       <Route exact path={"/"} component={Home} />  {/** Exact path here is important otherwise it will render on every page. */}
       <Route path={"/user/:id"} component={User} />  {/** /user at end of url */}
       <Route path={"/home"} component={Home} />  {/** /home at end of url */}
    </Router>
    );
  }; 
}

render(<App />, window.document.getElementById('app'));


/* THis didn't work because it seems that nesting Routes like this is deprecated (instead use path and exact path)
  <Router history={createBrowserHistory()}>  
     <Route path={"/"} component={Root} />
     <Route path={"user"} component={User} /> 
     <Route path={"home"} component={Home} /> 
  </Router>
*/