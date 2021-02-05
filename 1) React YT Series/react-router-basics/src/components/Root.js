//Set up to use bootstrap, but not actually using it :P
import React from 'react';
import { Header } from "./Header";

export class Root extends React.Component { 
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        { this.props.children }  {/** Whatever is passed as children to the Root module will be rendered here (so in this case the Home component will be rendered here.) */}
                    </div>
                </div>
            </div>
        );
    }
}