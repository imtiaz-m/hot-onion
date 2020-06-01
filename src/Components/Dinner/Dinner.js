
import React, { useState } from 'react';
import dinner from '../../fakeData/dinner';
import './Dinner.css'
import { } from 'react-router-dom';

const Dinner = () => {
    const first6 = dinner.slice(0, 6);
    const [dinneR] = useState(first6);

    return (
        <div>
            <div>
                {
                    dinneR.map(dinner => <div className="breakfast">
                        <img src={dinner.image} alt="" />
                        <h2>{dinner.name}</h2>
                        <p>{dinner.detail}</p>
                        <h3>$:{dinner.price}</h3>
                    </div>)
                }
            </div>
            <div className="checkout-button">
                <button>Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Dinner;