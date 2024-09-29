import React, { useState } from 'react';
import professions from './professions';
import './App.css';

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProfession = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % professions.length);
    };
    const prevProfession = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + professions.length) % professions.length);
  };
    return (
        <div className="app-container"> {/* Add a class to the main container */}
            <h1>Who Does What</h1>
            <div className="card-container"> {/* New container for the card and button */}
                <button className="arrow" onClick={prevProfession}>&lt;</button> {/* Left Arrow */}
                <Card title={professions[currentIndex].title} description={professions[currentIndex].description} />
                <button className="arrow" onClick={nextProfession}>&gt;</button> {/* Right Arrow */}
            </div>
        </div>
    );
};

const Card = ({ title, description }) => (
    <div className="card">
        <h2>{title}</h2>
        <div class="description"><p>{description}</p></div>
        
    </div>
);

export default App;
