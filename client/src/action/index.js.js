import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const memoriesRequest = (posts = [], action) => {
    switch (action.type) {

        case FETCH_ALL:
            return action.payload;

        case LIKE:
            return posts.map((posts) => (posts._id === action.payload._id ? action.payload : posts));

        case CREATE:
            return [...posts, action.payload];

        case UPDATE:
            return posts.map((posts) => (posts._id === action.payload._id ? action.payload : posts));

        case DELETE:
            return posts.filter((posts) => posts._id !== action.payload);
            
        default:
            return posts;
    }
};
export default memoriesRequest;