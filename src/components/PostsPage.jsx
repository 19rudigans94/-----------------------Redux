import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';
import ScrollButton from './ScrollButton';

const PostsPage = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items);
    const postStatus = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    const [showScrollButton, setShowScrollButton] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setShowScrollButton(documentHeight > windowHeight);

            if (scrollPosition > 100) {
                setScrollDirection('up');
            } else {
                setScrollDirection('down');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

    }, []);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;
    if (postStatus === 'loading') {
        content = <p className="text-center">Loading...</p>;
    } else if (postStatus === 'succeeded') {
        content = posts.map((post) => (
            <div key={post.id} className="border rounded p-4 mb-4 bg-white shadow">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
    } else if (postStatus === 'failed') {
        content = <p className="text-center text-red-500">Error: {error}</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-10">
            <h1 className="text-3xl font-bold mb-8">Posts</h1>
            {content}
            {showScrollButton && <ScrollButton direction={scrollDirection} />}

        </div>
    );
};

export default PostsPage;
