export const selectSong = (song) => {
    //We've made this an asynchronous one just for the sake of testing:
    return(dispatch) => { //This is a very stupid way of using thunks, but demonstrates how to set them up.  
                          //Rest of Redux is the same, just a few additions to get Redux thunks working.
        setTimeout(() => {
            dispatch((thunkSelectSong(song))); 
          },
          1000);
    }
};


export const thunkSelectSong = (song) => { 
    return { 
        type: 'SONG_SELECTED',
        payload: song
    }; 
}