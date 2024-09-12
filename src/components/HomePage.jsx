import React from 'react';
import SearchMovies from './SearchMovies';
import MovieList from './MovieList';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-20">
            <h1 className="text-4xl font-bold mb-4">Добро пожаловать на Кинопоиск!</h1>
            <p className="text-lg text-gray-600 mb-8">Используйте поиск, чтобы найти свои любимые фильмы.</p>
            <SearchMovies />
            <MovieList />
        </div>
    );
};

export default HomePage;