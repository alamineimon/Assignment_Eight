import React from 'react';
import Product from '../ProductContainer/Product';
import Slider from '../SliderContainer/Slider';
import './Body.css'

const Body = () => {
    return (
        <div className='body-container'>
            <Product></Product>
            <Slider></Slider>
        </div>
    );
};

export default Body;