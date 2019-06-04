import React, {Component} from 'react';
import styles from '../quatity-button/quantity.module.css'
import Select from 'react-select';

const quantities = [
  {value: 1, label: '1'},
  {value: 2, label: '2'},
  {value: 3, label: '3'},
  {value: 4, label: '4'},
  {value: 5, label: '5'},
  {value: 6, label: '6'},
  {value: 7, label: '7'},
  {value: 8, label: '8'},
  {value: 9, label: '9'},
  {value: 10, label: '10'},
  {value: 11, label: '11'},
  {value: 12, label: '12'},
];

class Quantity extends Component { 
  constructor (props) {
    super(props);
    this.state = {
      selectedOption: 1,
      priceAsString: this.props.price,
    }

    this.handleChange = this.handleChange.bind(this);
  
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption: selectedOption.value });
  }


  render () {
    let selectedOption = this.state.selectedOption;
    let priceAsNumber = this.props.price;
    if (typeof this.props.price === 'string') {
      priceAsNumber = parseFloat(this.props.price.replace(',', ''));
     
    }

    priceAsNumber = priceAsNumber * parseInt(this.state.selectedOption);
    let priceAsString = getCurrencyString(priceAsNumber)
  
    return (
      <div> 
        <div>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={quantities}
            placeholder={`Qty: ${this.state.selectedOption}`}
            isClearable={true}
            isSearchable={false}   
          />
        </div>
        <div className={styles.container}>
          <div className={styles.priceAsString}>{priceAsString}<span className={styles.shipping}> + Free Shipping</span></div>
        </div>    
      </div>
    )
  }  
}


const getCurrencyString = (currencyAsNumber) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currencyAsNumber);
}


Quantity.defaultProps = {
  price: "",
};

export default Quantity;
