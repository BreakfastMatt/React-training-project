import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actionUpdateParentCounter, actionUpdateChild2Counter } from '../../reducers/reducerCounters';


class Child2 extends Component { 
    //With my usage atm, I could do this binding inside the componentDidMount lifecycle function
    constructor(props) {
        super(props);
        this.onPlusButtonClick = this.onPlusButtonClick.bind(this);
    }

    //This function triggers when plus button clicked
    onPlusButtonClick(event) {
        let new_parent_count = this.props.parent_counter + 1;
        this.props.actionUpdateParentCounter(new_parent_count);

        let new_child2_count = this.props.local_count + 1;
        this.props.actionUpdateChild2Counter(new_child2_count);
    }

    render() {
        return (
            <div className="Child2">
                <button onClick={(e) => this.onPlusButtonClick(e)} className="btn btn-primary" style={{width: `150px`}}>
                    + <br/> {this.props.local_count}
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    local_count: state.reducerCounters.child2_counter,
    parent_counter: state.reducerCounters.parent_counter,
});


const mapDispatchToProps = {
    actionUpdateParentCounter,
    actionUpdateChild2Counter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Child2);