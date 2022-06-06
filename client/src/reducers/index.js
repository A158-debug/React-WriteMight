import {combineReducers} from 'redux'

import postsReducer from './posts';
import authReducer from './auth.js';

export const reducers = combineReducers({postsReducer,authReducer});