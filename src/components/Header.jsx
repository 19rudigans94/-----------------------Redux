import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=" fixed w-full bg-gray-800 p-4 text-white ">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    Home
                </Link>
                <Link to="/posts" className="text-2xl font-bold">
                    Posts
                </Link>
            </div>
        </nav>
    );
};

export default Header;