//Child2 component (the `plus` button)
import React, { Component } from 'react';

class Child2 extends Component { 
    state = {child_counter: 0};

    //This function triggers a call to the decrementCounter prop function (which calls updateCounter in Parent)
    onPlusButtonClick = event => {
        this.props.incrementCounter(true);
        this.setState({child_counter: this.state.child_counter + 1});
    }

    render() {
        return (
            <div className="Child2">
                <button onClick={(e) => this.onPlusButtonClick(e)} className="btn btn-primary" style={{width: `150px`}}>
                    + <br/> {this.state.child_counter}
                </button>
            </div>
        );
    }
}

export default Child2;