import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actionUpdateParentCounter, actionUpdateChild1Counter } from '../../reducers/reducerCounters';


class Child1 extends Component { 
    constructor(props) {
        super(props);
        this.onMinusButtonClick = this.onMinusButtonClick.bind(this);
    }

    //This function triggers when minus button clicked
    onMinusButtonClick(event) {
        let new_parent_count = this.props.parent_counter - 1;
        this.props.actionUpdateParentCounter(new_parent_count);

        let new_child1_count = this.props.local_count + 1;
        this.props.actionUpdateChild1Counter(new_child1_count);
    }

    render() {
        return (
            <div className="Child1">
                <button onClick={(e) => this.onMinusButtonClick(e)} className="btn btn-primary" style={{width: `150px`}}>
                    - <br/> {this.props.local_count}
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    local_count: state.reducerCounters.child1_counter,
    parent_counter: state.reducerCounters.parent_counter,
});


const mapDispatchToProps = {
    actionUpdateParentCounter,
    actionUpdateChild1Counter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Child1);