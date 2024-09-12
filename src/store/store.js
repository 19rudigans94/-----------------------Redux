import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import moviesReducer from './moviesSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        movies: moviesReducer,
    },
});