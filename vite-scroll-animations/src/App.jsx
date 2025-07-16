import React from 'react';
import ScrollAnimation from './components/ScrollAnimation';
import './styles/animations.css';

const App = () => {
    return (
        <div>
            <h1 className="title">Scroll Animation Effects</h1>
            <ScrollAnimation />
        </div>
    );
};

export default App;