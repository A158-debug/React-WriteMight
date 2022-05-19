
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

//Take two paramter state and action
const memoriesRequest = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case LIKE:
            return posts.map((posts) => (posts._id === action.payload._id ? action.payload : posts));  //again go to video

        case CREATE:
            return [...posts, action.payload];

        case UPDATE:
            return posts.map((posts) => (posts._id === action.payload._id ? action.payload : posts));  //again go to video

        case DELETE:
            return posts.filter((posts) => posts._id !== action.payload);
            
        default:
            return posts;
    }
};
export default memoriesRequest;