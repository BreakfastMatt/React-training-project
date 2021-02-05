import React from 'react';

import unsplash from '../api/unsplash'; //.. means go up a directory 
import SearchBar from './SearchBar';
import ImageList from './ImageList';


//We refactored this into a class so that we could add the onSearchSubmit function to handle all of the searching logic inside App instead of inside SearchBar
export class App extends React.Component {
    state = {
        images : [] // we expect this to have an array eventually, so default value will be an empty array.
    };

     onSearchSubmit = async(term) => {  //if using regular function notation, put the async term before the function name
         console.log("Search executed using term: '", term, "'.");
         const response = await unsplash.get('/search/photos',  //Location to send GET request to 
             { params: { query: term }} //Specifies the different query string parameters we want to add into this request  
         );

         this.setState({
             images : response.data.results  //Store the results from the search in the images array :D
         });
     }

     
     render() {
         return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />   {/** Don't have to use the name 'onSubmit' here, but it lets us know what it's for. */}
                <ImageList images={this.state.images} />       {/** Passing the results of the search (the images) down to the ImageList component */}
            </div>
        );
     }
};