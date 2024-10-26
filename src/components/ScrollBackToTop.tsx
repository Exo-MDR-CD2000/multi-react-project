import React, { useState, useEffect } from 'react';

const ScrollBackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`btn btn-primary position-fixed bottom-0 end-0 m-3 ${isVisible ? 'visible' : ''}`}
                id="scrollToTop"
            >
                <i className="bi bi-arrow-up"></i>
            </button>
        </div>
    );
};

export default ScrollBackToTop;