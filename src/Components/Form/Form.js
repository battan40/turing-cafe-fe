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

  handleChange = (event) => {
    this.setState({ [event.target.name]:
    event.target.value})
  }


render() {
  return(
    <form>
      <input
        type='text'
        placeHolder='Name'
        name='name'
        value={this.state.name}
        onChange={(event) => this.handleChange(event)}

      />

      <input
        type='number'
        placeHolder='Number'
        name='number'
        value={this.state.name}
        onChange={(event) => this.handleChange(event)}

      />

      <button onClick={(event) => this.submitReservation(event)}>➕ request reservation</button>

    </form>
  )
  }
}

export default Form;
