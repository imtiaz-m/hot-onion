

import React, { useState } from 'react';
import breakfast from '../../fakeData/breakfast';
import Launch from '../Launch/Launch';
const Food = () => {
    const first6 = breakfast.slice(0,6);
    const [products]=useState(first6);
    return (
        <div>
            {
                products.map(pd=><Launch product={pd}></Launch>)
            }
            
            <div className= "checkout-button">
        <button>Checkout Your Food</button>
    
            </div>
            
            
        </div>
       
        
    );
};

export default Food;