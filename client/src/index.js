import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import authReducer from './reducers/auth';
import postsReducer from './reducers/posts';

import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux';

const store = configureStore({
  reducer: {
    authReducer: authReducer,
    postsReducer: postsReducer
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

