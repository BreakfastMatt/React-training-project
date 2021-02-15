//Child1 component (the `minus` button)
import React, { Component } from 'react';

class Child1 extends Component {
    state = {child_counter: 0};

    //This function triggers a call to the decrementCounter prop function (which calls updateCounter in Parent)
    onMinusButtonClick = event => {
        this.props.decrementCounter(false);
        this.setState({child_counter: this.state.child_counter + 1});
    };

    render() {
        return ( 
            <div className="Child1">
                <button onClick={(e) => this.onMinusButtonClick(e)} className="btn btn-primary" style={{width: `150px`}}> 
                    - <br/> {this.state.child_counter}
                </button>
            </div>
        );
    };
}

export default Child1;