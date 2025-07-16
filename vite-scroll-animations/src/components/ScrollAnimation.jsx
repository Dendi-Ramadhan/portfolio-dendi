import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollAnimation = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div>
            <h2 data-aos="fade-up">Scroll Down to See Animations</h2>
            <div data-aos="fade-right" className="animated-box">
                This box will fade in from the right.
            </div>
            <div data-aos="fade-left" className="animated-box">
                This box will fade in from the left.
            </div>
            <div data-aos="fade-up" className="animated-box">
                This box will fade in from the bottom.
            </div>
        </div>
    );
};

export default ScrollAnimation;