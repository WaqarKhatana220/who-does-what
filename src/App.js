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
        <div className="app-container">
            <h1>Who Does What</h1>
            <div className="card-container">
                <button className="arrow" onClick={prevProfession}>&lt;</button>
                <Card title={professions[currentIndex].title} description={professions[currentIndex].description} date={professions[currentIndex].date} />
                <button className="arrow" onClick={nextProfession}>&gt;</button>
            </div>
        </div>
    );
};

const Card = ({ title, description, date }) => (
    <div className="card">
        <h3 class="title">{title}</h3>
        <div className="description"><p>{description}</p></div>
        <div class="date"><p className="bottom-title">Originated: {date}</p></div>{/* New title at the bottom */}
    </div>
);

export default App;
