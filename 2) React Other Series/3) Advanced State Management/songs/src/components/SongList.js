import React, { Component } from 'react';
import { connect } from 'react-redux'; //Only the SongList needs to create the connect function 

import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => 
        {
            return (  //This inner *return* returns some JSX
                <div className="item" key={song.title}>  {/** Just doing title of song for ID here, which is fine for this small example */}
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => {this.props.selectSong(song) }}
                        >
                            Select
                            </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        // this.props === { songs: state.songs }
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {  //this method is called this by convention, but basically just gets your state
    //state = {list of songs, selected song}
    return { songs: state.songs };
}

export default connect(mapStateToProps, {selectSong})(SongList); //connect(<arguments>)(<component to connect to>)
//selectSong Action creator will be passed into (by the connect component) the SongList component via the props system.

/**
 * Why did we pass the selectSong action creator to connect instead of just calling it like we call other components?
 * - cause really it's just a basic function that returns a JS object.
 * - Using the conenct function to call it means it links up the action properly with the reducers allowing it to be dispatched to a reducer correctly.
 */