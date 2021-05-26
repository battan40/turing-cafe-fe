import React, { Component } from 'react';
import { fetchReservations } from '../../Utils/ApiCalls';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    }
  }


}

render() {
  return(
    <form>
      <input
        type='text'
        placeHolder='Name'
        name='name'
        value={this.state.name}

      />

      <input
        type='number'
        placeHolder='Number'
        name='number'
        value={this.state.name}

      />

    </form>
  )
}

export default Form;
