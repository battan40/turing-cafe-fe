import React from 'react';
import Card from '../Card/Card'


const Reservations = ({ reservations, deleteReservation}) => {

  const reservationCards = reservations.map(reservation => {
    return(
      <div>
        <Card
          id={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
          key={reservation.id}
          deleteReservation={deleteReservation}
        />
      </div>
    )
  })

  return(
    <article className='resy-container'>
      { reservationCards }
    </article>
  )
}

export default Reservations;
