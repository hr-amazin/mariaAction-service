import React from 'react';
// import styles from './actions.jsx.js.js';
import Quantity from '../quatity-button/quantity.jsx';
import AddToCart from '../addToCart-button/addToCart.jsx';
import BuyNowButton from '../buyNow-button/buyNow.jsx';

const ActionsButtons = ({price=""}) => { 
  return (
    <div>
      <Quantity price={price}/>
      <AddToCart/>
      <BuyNowButton/>
    </div>
  )
}

export default ActionsButtons;