import React from 'react';
import './SingleCard.css'
const SingleCard = (props) => {
    // console.log(props);
    const {handleAddToCart} = props
    const {image,details,name,age, time} = props.product
    return (
        <div>
            <div className='cards'>
                <img src={image} className="card-img-top" alt="..."></img>
                <div className='card-body'>
                    <h3 >{name}</h3>
                    <p  >{details}</p>
                    <p  >Age: {age}</p>
                    <p  >Time:{time} </p>
                    <button onClick={()=>{handleAddToCart(props.product)}} >Add To Cart</button>
                </div>
                </div>
        </div>
    );
};

export default SingleCard;