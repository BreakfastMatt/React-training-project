import { combineReducers } from 'redux';
import unsplash from '../api/unsplash';
//don't make api calls in your reducer as it is meant to be "pure" :P
//by pure we mean that they shouldn't modify anything outside of their scope.

export const searchImagesReducer = (images=[], action) => {
    if (action.type === 'FORM_SUBMITTED') {
        return action.payload;
    }
    return images;
}

export default combineReducers({
    images: searchImagesReducer
})