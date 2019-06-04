import React from 'react';
import styles from '../actionPrice/actionPrice.module.css';

const ActionPrice = ({price = ''}) =>  {
  let priceAsNumber = price;
 
  if (typeof price === 'string') {
     priceAsNumber = parseFloat(price.replace(',', ''));
  }
 
  let priceAsString = getCurrencyString(priceAsNumber);


  return (
    <div>
      <div className={styles.price}>{priceAsString}</div>
      <div>
        <span>
          <i>
            <span className={styles.iconImage}></span>
            <span className={styles.primeRegard}>FREE One-day</span>
          </i>
        </span>
      </div>
    </div>
  ) 
}

const getCurrencyString = (currencyAsNumber) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currencyAsNumber);
}

export default ActionPrice;