import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GeneralInfo from './components/product-general-info/general-info.jsx';
import axios from 'axios';
import styles from '../src/style.module.css';
import ActionsButtons from './components/actions-buttons/actions.jsx';

class Action extends Component {
  constructor(props){
    super(props)
    this.state = {
      productInfo: {},
    }
  }

  componentDidMount() {
    axios.get(`http://action.us-east-2.elasticbeanstalk.com/action/${1001}`)
    .then(response => {
       return response.data;
    })
    .then(description => {
      this.setState({
          productInfo: description,
      })  
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.id !== this.props.id && this.props.id !== "") {
      axios.get(`http://action.us-east-2.elasticbeanstalk.com/action/${this.props.id}`)
      .then(response => {
        return response.data;
     })
     .then(description => {
       if(description) {
        this.setState({
          productInfo: description,
         }) 
       }      
     })
     .catch(err => {
       console.log(err);
     })
    }

  }

  render() {
    return (
      <div className={styles.container}>
        <GeneralInfo productInfo = {this.state.productInfo}/>    
        <ActionsButtons price={this.state.productInfo.price}/> 
      </div>
    )
  }
}

window.Action = Action;
// ReactDOM.render(<Description/>, document.getElementById('description'));


//  {/* <ProductDescription productDescription= {this.state.productInfo.description} id={this.state.productInfo._id}/> */}





