//Since we called this index.js we can shorten our imports to:  import actions from '../actions';

//Action creator
export const selectSong = (song) => {
    //Return an action
    return {  // we are returning a song object here
        type: 'SONG_SELECTED',
        payload: song
    };
};
