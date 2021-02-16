import { combineReducers } from 'redux';
import reducerCounters from './reducerCounters';

//For my small project this is not necessary, but am trying to stick to the norms established in the INN8 project
export default history => combineReducers({
    reducerCounters,
});


//actually ignore this, need to check out why it is done this way in the INN8 project.  
//Will leave this in for now to remidn me to ask.