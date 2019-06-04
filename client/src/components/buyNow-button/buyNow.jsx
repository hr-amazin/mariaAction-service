import React from 'react';
import styles from '../buyNow-button/buyNow.module.css';


const BuyNowButton = () => { 
  return (
    <div className={styles.container}>
      {/* <button className={styles.button}>
      <image className={styles.iconCart} src="https://cdn0.iconfinder.com/data/icons/webshop-essentials/100/shopping-cart-512.png" alt="cart"></image>
      Buy now button
      </button> */}
      <input className={styles.button} type='button' value="Buy Now"></input>  
      
    </div>
  )
}

export default BuyNowButton;