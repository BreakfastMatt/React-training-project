//Since we called this index.js we can shorten our imports to:  import actions from '../reducers';
import { combineReducers } from 'redux'; //use the curly braces if importing a named function/class


export const songsReducer = () => {
    //In this case we are just doing a static list (which isn't a useful scenario for using Redux :P)
    return [
        { title: 'No scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:30'},
        { title: 'All star', duration: '3:15'},
        { title: 'I want it that way', duration: '1:45'}
    ];
};

export const selectedSongReducer = (selectedSong=null, action) => { 
    //in the case of this app we only have one action creator (of type SONG_SELECTED) and thus this if-statement is not needed
    //but would be needed if we had multiple types of actions.
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});