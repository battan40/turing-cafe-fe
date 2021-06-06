import React from 'react';
import './Card.css'

const Card = ({ id, name, date, time, number, deleteReservation }) => {
  return(
    <article className='card'>
      <h3 className='name'>{name}</h3>
      <h4 className='date'>{date}</h4>
      <h4 className='time'>{time}</h4>
      <h4 className='number'>{number}</h4>
      <button onClick={() => deleteReservation(id)}>🗑</button>
    </article>
  )
}

export default Card;
