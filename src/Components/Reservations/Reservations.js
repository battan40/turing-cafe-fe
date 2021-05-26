import React from 'react';
import Card from '../Card/Card'


const Reservations = ({ reservations }) => {

  const reservationCards = reservations.map(reservation => {
    return(

    )
  })

  return(
    <article className='reservations-container'>
      { reservationCards }
    </article>
  )
}

export default Reservations;
