import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
        <div className='slider-body'>
            <h1>Al Amin Eimon</h1>
            <div className='health-check-container'>
                <ul>
                    <li><strong>75</strong> <small>kg</small> <br /> Weight</li>
                    <li><strong>6.5</strong> <br />Height</li>
                    <li><strong>25</strong> <small>yrs</small> <br /> Age</li>
                </ul>
            </div>
            <h4>Add A Break</h4>
            <div className='break-container'>
                <ul>
                    <li><strong>10</strong>s</li>
                    <li><strong>20</strong>s</li>
                    <li><strong>30</strong>s</li>
                    <li><strong>40</strong>s</li>
                    <li><strong>50</strong>s</li>
                </ul>
            </div>
            <h4>Exercise Details</h4>
            <div className="exercise-details">
                <p>Exercise Time</p>
                <p>200 seconds</p>
            </div>
            <div className="break-details">
                <p>Break Time</p>
                <p>20 seconds</p>
            </div>
            <button>Activity Complete</button>
        </div>
    );
};

export default Slider;