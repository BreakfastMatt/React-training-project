import { cloneDeep } from 'lodash';


/* Set all counters to zero for initial state */
const initState = {
    parent_counter: 0,
    child1_counter: 0,
    child2_counter: 0,
};


/* Action Types: */
export const PARENT_COUNTER_UPDATE = 'PARENT_COUNTER_UPDATE';
export const CHILD1_COUNTER_UPDATE = 'CHILD1_COUNTER_UPDATE';
export const CHILD2_COUNTER_UPDATE = 'CHILD2_COUNTER_UPDATE';


/* Reducer switch that switches on action types */
export default (state = initState, action) => {
    switch (action.type) {
        case PARENT_COUNTER_UPDATE:
            state = cloneDeep(state);
            state.parent_counter = action.payload.new_count;
            return state;

        case CHILD1_COUNTER_UPDATE:
            state = cloneDeep(state);
            state.child1_counter = action.payload.new_count;
            return state;

        case CHILD2_COUNTER_UPDATE:
            state = cloneDeep(state);
            state.child2_counter = action.payload.new_count;
            return state;

        default:
            return state;
    }
};



/* The action creators (these bad bois will trigger the switch statement above ^ ) */
export const actionUpdateParentCounter = new_count => ({
    type: PARENT_COUNTER_UPDATE,
    payload: { new_count },
});

export const actionUpdateChild1Counter = new_count => ({
    type: CHILD1_COUNTER_UPDATE,
    payload: { new_count },
});

export const actionUpdateChild2Counter = new_count => ({
    type: CHILD2_COUNTER_UPDATE,
    payload: { new_count },
});