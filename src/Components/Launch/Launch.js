import React, { useState } from 'react';
import breakfast from '../../fakeData/breakfast';
import './Launch.css'
const   Launch  = () => {
    const first6 =breakfast.slice(0,6);
    const[launcH]=useState(first6);
   
    return (
        <div className="launch-container">
                
          <div  >
          {
                launcH.map(launch=><div className="launch">
                    <img src={launch.image} alt=""/>
                <h2>{launch.name}</h2>
                <p>{launch.detail}</p>
                <h3>$:{launch.price}</h3>
                    </div>)
           }
          </div>
          <div className="checkout-button">
              <button>Checkout Your Food</button>
              </div>
        </div>
    );
};

export default  Launch ;