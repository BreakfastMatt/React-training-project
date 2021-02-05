import React from "react";

export class User extends React.Component {
    onNavigateHome(){
        let url = "/home";
        this.props.history.push(url);  //use this to naviage to the specified url
    }

    render () {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.match.params.id}</p>  {/** The parameter name used here was defined in index.js:  <Route path={"/user/:id"}.... */}
                <button onClick={this.onNavigateHome.bind(this)}> Go Home! </button>
            </div>
        );
    }
}