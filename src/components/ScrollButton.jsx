import React, { useEffect, useState } from 'react';

const ScrollButton = ({ direction }) => {
    const [scrollDirection, setScrollDirection] = useState(direction);

    const handleScroll = () => {
        if (scrollDirection === 'down') {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        } else if (scrollDirection === 'up') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        setScrollDirection(direction);
    }, [direction]);

    return (
        <button
            onClick={handleScroll}
            className={`fixed bottom-4 right-4 p-2 rounded shadow-lg ${scrollDirection === 'down' ? 'bg-blue-500' : 'bg-green-500'
                } text-white`}
        >
            {scrollDirection === 'down' ? 'Scroll Down' : 'Scroll Up'}
        </button>
    );
};

export default ScrollButton;