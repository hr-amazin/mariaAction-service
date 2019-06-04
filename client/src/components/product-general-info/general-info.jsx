import React from 'react';
import Delivery from '../delivery/delivery.jsx';
// import Price from '../product-price/price.jsx';
import ActionPrice from '../actionPrice/actionPrice.jsx'

const GeneralInfo = ({productInfo}) =>  {  
  return (   
    <div>
      <ActionPrice price={productInfo.price}/>
      <Delivery delivery={productInfo.deliver_estimation} />
    </div>
  ) 
}

export default GeneralInfo;

//PENDING:
// seller={productInfo.seller_name}
