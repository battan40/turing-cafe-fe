import React, { Component } from 'react';
import { fetchReservations, postNewReservation } from '../../Utils/ApiCalls';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
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
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: parseInt(this.state.number)

    }
    this.props.addReservation(newRezo)
      postNewReservation(newRezo)
      this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ title: '', description: ''
  });
  }

render() {
  return(
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={this.state.name}
        onChange={(event) => this.handleChange(event)}

      />

      <input
        type='text'
        placeholder='Date'
        name='date'
        value={this.state.date}
        onChange={(event) => this.handleChange(event)}

      />

      <input
        type='number'
        placeholder='Enter Preferred Time'
        name='time'
        value={this.state.time}
        onChange={(event) => this.handleChange(event)}

      />

      <input
        type='number'
        placeholder='Number of Guests'
        name='number'
        value={this.state.number}
        onChange={(event) => this.handleChange(event)}

      />

      <button type='button' onClick={(event) => this.submitReservation(event)}>Request Reservation</button>

    </form>
  )
  }
}

export default Form;
