import React, { useState } from 'react';
import './Breakfast.css'
import launch from '../../fakeData/launch';
import { Link } from 'react-router-dom';

const Breakfast = (props) => {
    const first5 =launch.slice(0,6);
    const [breakFast]= useState(first5);
    
    
    return (
        <div className="breakfast-container">
         
          <div  >
          {
                breakFast.map(breakF=><div key={breakF.key} className="breakfast">
                     
                     <Link to={"/detail/"+breakF.key}><img src={breakF.image} alt=""/></Link> 
                     <h2>{breakF.name}</h2>
                <p>{breakF.detail}</p>
                <h3>$:{breakF.price}</h3>
                
                    </div>)
           }
          </div>
         
          <div className="checkout-button">
             <button >Checkout Your Food</button>
              </div>
          
        </div>
    );
};

export default Breakfast;