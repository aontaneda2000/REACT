import React from 'react'

const QuoteBox = ({ randomAuthor, randomColors, changeState }) => {
  
  const objectStyle = {
    color: randomColors
  }

  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <article className='card' style={objectStyle}>
        <i className="fa-solid fa-quote-left"></i>
      <p>{`${randomAuthor.quote}`}</p>
      <h2>{`${randomAuthor.author}`}</h2>
      <button className='card__btn' onClick={changeState} style={objectBgStyle}>&#62;</button>
    </article>
  )
}

export default QuoteBox