import React from 'react';
import './Card.css'

const Card = ({ name, date, time, number }) => {
  return(
    <article className='card'>
      <h3>{name}</h3>
      <h4>{date}</h4>
      <h4>{time}</h4>
      <h4>{number}</h4>
    
    </article>
  )
}

export default Card;
