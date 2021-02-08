import React from 'react';
import { connect } from 'react-redux';

import './ImageList.css';
import ImageCard from './ImageCard';


const ImageList = (props) => {
    const images = props.images.map((image) => {  // { description, id, urls} => we've taken images and destructured it into description, id and urls so we can use those names as is 
                                                                    // instead of doing image.description, image.id, and image.urls
            return <ImageCard key={image.id} image={image}/>  //Key is assigned to the root tag inside the map statement
        });

        return (
            <div className="image-list">
                {images}
            </div>
        );
};


const mapStateToProps = (state) => {
    console.log("ImageList state from mapStateToProps: ", state);
    return { images: state.images }; //get key from reducers
};


export default connect(mapStateToProps)(ImageList);  //Remember: don't use curly braces during import if using export default.