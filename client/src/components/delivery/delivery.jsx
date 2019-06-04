import React from 'react';
import styles from '../delivery/delivery.module.css'

const Delivery = ({delivery, seller}) =>  {
  // let hours = [1, 2, 3, 4, 5];
  // let randomIndex = Math.floor(Math.random() * hours.length);
  // let randomHour = hours[randomIndex];
  return (
    <div className={styles.container}>
      <div className={styles.deliveryOption}>FREE Delivery
        <b className={styles.deliveryEstimation}>{delivery}</b>
      </div>  

      <div className={styles.stock}>In Stock.</div>  
      
    </div>
  ) 
}

export default Delivery;

// {/* <div className={styles.seller}>Ships from and sold by 
//         <a className={styles.sellerLink} href='#'>{seller}</a>
// </div> */}
