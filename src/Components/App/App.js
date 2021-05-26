import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'
import { fetchReservations, postNewReservation } from '../../Utils/ApiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  addReservation = (newRezo) => {
    this.setState({ reservations: [...this.state.reservations, newRezo]})
  }

  componentDidMount = () => {
    fetchReservations()
    .then(data => this.setState({ reservations: [...data]}))
    postNewReservation()
    .then(data => this.setState({ reservations: [...data]}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
          <Form
          addReservation={this.addReservation}
          />
          <Reservations
          className='resy-container'
          reservations={this.state.reservations}
          />
      </div>
    )
  }
}

export default App;
