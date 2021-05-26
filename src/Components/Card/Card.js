import React from 'react';
import './Card.css'

const Card = ({ name, date, time, count }) => {
  return(
    <article className='card'>
      <h3>{name}</h3>
      <h4>{date}</h4>
      <h4>{time}</h4>
      <h4>{count}</h4>
    </article>
  )
}

export default Card;
