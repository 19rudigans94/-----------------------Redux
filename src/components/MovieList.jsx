import React from 'react';
import { useSelector } from 'react-redux';

const MovieList = () => {
    const { movies = [], loading, error } = useSelector((state) => state.movies);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    if (movies.length === 0) {
        return <div className="text-center">No movies found</div>;
    }

    return (
        <div className=" bg-gray-100 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {movies.map((movie) => (
                    <div key={movie.imdbID} className="border rounded p-4 bg-white shadow">
                        <h3 className="text-lg font-bold mb-2">{movie.Title}</h3>
                        <img src={movie.Poster} alt={movie.Title} className="w-full h-auto mb-2" />
                        <p>{movie.Year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;

