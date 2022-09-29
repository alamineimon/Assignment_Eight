// import React from 'react';
import './Activity.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';



const Activity = ({singleProduct}) => {
    const notify = () => toast("You Have Done.");
    let totalTime = 0 ;
    for(const product of singleProduct){
        totalTime =totalTime +  parseInt(product.time) ;
    }
    const [getTime , setGetTime] = useState([])
    const TimeSet =(e)=>{
        setGetTime(e.target.innerText);
    }

    return (
        <div className='activity-container'>
            <div className=''>
                <h1>Al Amin Eimon </h1>
            </div>
                <div className="info">
                    <div>
                        <h1>65(kg)</h1>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h1>6.5</h1>
                        <p>Height</p>
                    </div>
                    <div>
                        <h1>22(yrs)</h1>
                        <p>Age</p>
                    </div>
                </div>
                <h4>Add a Break</h4>

                <div className="take-time">
                    <ul>
                        <button onClick={TimeSet} >10s</button>
                        <button onClick={TimeSet} >25s</button>
                        <button onClick={TimeSet} >30s</button> 
                        <button onClick={TimeSet} >45s</button>
                        <button onClick={TimeSet} >50s</button>
                    </ul>
                </div>
                <h2>Exercise Details</h2>
                <div className='exercise-time'>
                    <h4>Exercise Time: {totalTime}s</h4>
                </div>
                <div className='break-time'>
                    <h4>Break Time:  {getTime}</h4>
                </div>
                <button onClick={notify}  className='activity-btnn'>
                    Completed Activity 
                </button>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default Activity;