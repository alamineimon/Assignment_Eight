// import React from 'react';
import './Shop.css';
import React,{ useEffect, useState } from 'react';
import Activity from '../Activity/Activity'
import SingleCard from '../All-Cards/SingleCard/SingleCard';
// import { addToDb, getStoredCart } from '../../fakeInfo.json';


const Shop = () => {
    const [products , setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([])

    useEffect(()=>{
        fetch('fakeInfo.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    //     // for localStorage 
    // useEffect(()=>{
    //     const storedCart = getStoredCart()
    //     // console.log(storedCart);
    //     for(const _id in storedCart){
    //         console.log(_id);
    //     }
    // },[])

    const handleAddToCart=(product) =>{
        // console.log(product);
        const newSingleProduct = [...singleProduct , product];
        setSingleProduct(newSingleProduct)

        // addToDb(product._id);
    }

    return (
        <div className='shop-cont'>
            <div className=''>
                <h1>Build Your Body: {products.length}</h1>
               <h2>Select today’s exercise</h2>
               <button className='interView-qs'>Question And Answer</button>
                <div className="product-container">
                {
                    products.map(product => <SingleCard key={product._id}
                        product = {product}
                        handleAddToCart={handleAddToCart}
                        ></SingleCard>)
                }

                </div>
            </div>
            <div className="activity-container">
               <Activity singleProduct={singleProduct}></Activity>
            </div>        
        </div>
    );
};

export default Shop;