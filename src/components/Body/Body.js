import './Body.css';
import React,{ useEffect, useState } from 'react';
import Slider from '../Slider/Slider'
import Card from '../Card/Card';


const Body = () => {
    const [products , setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([])

    useEffect(()=>{
        fetch('fakeInfo.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart=(product) =>{
        // console.log(product);
        const newSingleProduct = [...singleProduct , product];
        setSingleProduct(newSingleProduct)

    }

    return (
        <div className='shop-cont'>
            <div className=''>
                <div className='shop-txt'>
                    <h2>Select today’s exercise</h2>
                    <h1>Build Your Body: {products.length}</h1>
                </div>
                <div className="product-container">
                {
                    products.map(product => <Card key={product._id}
                        product = {product}
                        handleAddToCart={handleAddToCart}
                        ></Card>)
                }

                </div>
            </div>
            <div className="activity-container">
               <Slider singleProduct={singleProduct}></Slider>
            </div>        
        </div>
    );
};

export default Body;