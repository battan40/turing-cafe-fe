import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import {fetchReservations } from '../../Utils/ApiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetchReservations()
    .then(data => this.setState({ reservations: [...data]}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>  
          <Reservations className='resy-container' reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
