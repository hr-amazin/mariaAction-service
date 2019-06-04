import React from 'react';
import styles from '../addToCart-button/addToCart.module.css'



const AddToCart = () => { 
  return (
    <div className={styles.container}>
      <input className={styles.addToCart} type="button" value="Add to Cart"></input>  
    </div>
  )
}

export default AddToCart;