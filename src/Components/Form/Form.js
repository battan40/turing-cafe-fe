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

  submitReservation = (event) => {
    event.preventDefault();
    const newRezo = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newRezo);

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
        placeHolder='Number of Guests'
        name='number'
        value={this.state.name}
        onChange={(event) => this.handleChange(event)}

      />

      <button onClick={(event) => this.submitReservation(event)}>Request Reservation</button>

    </form>
  )
  }
}

export default Form;
