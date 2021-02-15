//The blue box component
import React, { Component } from 'react';
import Child1 from './Child1';  //the minus
import Child2 from './Child2';  // the plus

class Parent extends Component {

    constructor(props){
        super(props);
        this.updateCounter = this.updateCounter.bind(this);

        this.state = {counter: 0}
    }

    //This function is called in Child1 and Child2 to decrement and increment counter respectively.
    updateCounter(increment=false){
        if (increment) 
            this.setState({counter: this.state.counter + 1});
        else
            this.setState({counter: this.state.counter - 1});
    };

    render () {
        return (
            //Ignore the classNames for now, they aren't actually doing anything atm.
            <div>
                Counter: {this.state.counter} <br/><br/>
                <div class="container px-4">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border bg-light"> <Child1 decrementCounter={this.updateCounter} /> </div>
                        </div>
                        <div class="col">
                             <div class="p-3 border bg-light"> <Child2 incrementCounter={this.updateCounter} /> </div>
                        </div>
                     </div>
                </div>

                <div>
                </div>
                
            </div>
        );
    };
}

export default Parent;