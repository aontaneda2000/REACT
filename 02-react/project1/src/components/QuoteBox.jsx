import React from 'react'
import Button from './Button'


const QuoteBox = ({ randomAuthor, randomColors, changeState }) => {
  
  const objectStyle = {
    color: randomColors
  }

  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <article className='card' style={objectStyle}>
      <header className='card__header'>
    
      
      <p className='card__prhase'> <span className='card__icon'><i className="fa-solid fa-quote-left quote"></i></span> {`${randomAuthor.quote}`}</p>
      </header>

      <Button randomAuthor={randomAuthor} changeState={changeState} objectBgStyle={objectBgStyle} />
    </article>
  )
}

export default QuoteBox