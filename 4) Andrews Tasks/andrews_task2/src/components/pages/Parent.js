import React, {Component} from 'react';
import { connect } from 'react-redux';
import Child1 from './Child1';  
import Child2 from './Child2';  



class Parent extends Component {
    render () {
        return (
            <div>
                Counter: {this.props.parent_counter} <br/><br/>
                <div class="container px-4">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border bg-light"> <Child1 decrementCounter={this.updateCounter} /> </div>
                        </div>
                        <div class="col">
                             <div class="p-3 border bg-light"> <Child2 /> </div>
                        </div>
                     </div>
                </div>

                <div>
                </div>
                
            </div>
        );
    };
}


/* Maps specified things from Redux state to props  */
const mapStateToProps = state => ({
    parent_counter: state.reducerCounters.parent_counter,
});


export default connect(mapStateToProps)(Parent);