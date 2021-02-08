//I don't know if I'm going about this in the correct manner...
import unsplash from '../api/unsplash';

export const executeSearch = (searchTerm='') => {
    return (dispatch, getState) => {
        const response = await unsplash.get('/search/photos',  //Location to send GET request to 
             { params: { query: searchTerm }} //Specifies the different query string parameters we want to add into this request  
         );
         return {
             type: 'FORM_SUBMITTED',
             payload: response.data.results
         }
    };
};



/* export const executeSearch = (term=null) => {
    const response = await unsplash.get('/search/photos',  //Location to send GET request to 
             { params: { query: term }} //Specifies the different query string parameters we want to add into this request  
         );

    images = response.data.results;  //going to have to check to ensure that this 
    //okay it seems that in order to do this I would need to make use of the Redux Thunk middleware
    //this allows returning of functions and working with promises which allows for delayed actions
    //these actions can be dispatched asynchronously and resolve each promise that gets returned

    
    return { 
        type: 'FORM_SUBMITTED',
        payload: images
    }
} */