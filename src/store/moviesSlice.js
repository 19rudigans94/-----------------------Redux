import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const YOUR_API_KEY = '2d7c2393';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query) => {
    if (!query) return [];
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${YOUR_API_KEY}&s=${query}`);
    return response.data.Search || [];
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default moviesSlice.reducer;