import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../store/moviesSlice';

const SearchMovies = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            dispatch(fetchMovies(query));
        }
    };

    return (
        <form onSubmit={handleSearch} className="mb-4 flex space-x-2">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie..."
                className="border rounded p-2 flex-grow"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
        </form>
    );
};

export default SearchMovies;