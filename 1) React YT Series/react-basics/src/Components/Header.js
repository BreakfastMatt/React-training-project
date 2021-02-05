// This is a stateless component and is thus more efficient (performance-wise) than the Home component.


import React from "react";
//Don't need to import render as it won't be render directly into the html file.  it ill merely be included in the app component


export const Header = (props) => {  //we export it so we can use it in the app component later 
        return ( 
            <nav>
                <div>
                    <div>
                        <hr/>
                        This is from the header component. :D
                        <p> {props.RandomText} </p>  {/* Note that we don't use this.props here (maybe check with Pierre why that is.) */}
                        <hr/>
                    </div>
                </div>
            </nav>
        );
    };