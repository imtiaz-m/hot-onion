import React from 'react';
import launch from '../../fakeData/launch';
import { useParams } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';

const Detail = () => {
    const {productKey}=useParams();
    const product = launch.find(pd=>pd.key===productKey);
    console.log(product);
    return (
        <div>
    
            <Breakfast product={product}></Breakfast>
           
        </div>
    );
};

export default Detail;