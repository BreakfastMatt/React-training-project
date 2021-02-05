import { getByTitle } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => { //destructured props out into the song prop
    if(!song){ //if song is a null value
        return ( <div>Select a song</div> );
    }
    return (
        <div>
            <h3>Details for: </h3> 
            <p> Title: {song.title} </p>
            <p> Duration: {song.duration} </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    //we just return the property in the state that we care about, so we wanted selectedSong 
    //the keys for these are chosen in the combineReducers function
    console.log(state);
    return  { song : state.selectedSong } //we don't have to call the key on the left selectedSong, so we opted just for song here
};

export default connect(mapStateToProps)(SongDetails); 