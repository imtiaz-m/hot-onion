import React, { useState } from 'react';
import './Detail.css'
import launch from '../../fakeData/launch';

import { useParams } from 'react-router-dom';


const Detail = () => {
    const { productKey } = useParams();
    const product = launch.find(pd => pd.key === productKey);
    //////

    // console.log(product);
    const [count, setCount] = useState(0);
    return (
        <div className="detail-container">

            <div className="breakfast-detail">
                <div className="info">
                    <h1>{product.name}</h1>
                    <p><small>Regalo is a contemporary boutique restaurant in the heart of port city. Regalo means gift, it means to have meal in a wonderful atmosphere. We are passionate about creating a superior dining experience and we promise to provide finest food and drink with outmost respect and honesty. We believe in providing our valuable customers personalised tailored service.</small></p>
                    <h2>$:{product.price}
                        <span className="quantity">
                            <span className="plus" onClick={() => setCount(count + 1)}>+</span>{count}
                            <span className="plus" onClick={() => setCount(count - 1)}>-</span>
                        </span>
                    </h2>
                    <button className="cart-button">Add To Cart</button>

                </div>
                <div>
                    <img src={product.image} alt="" />
                </div>

            </div>



        </div>


    );
};

export default Detail;