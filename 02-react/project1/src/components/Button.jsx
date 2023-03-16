import React from 'react'

const Button = ({randomAuthor, changeState, objectBgStyle}) => {
  return (
     
      
    <div className="card__container">
      <p className='card__title'>{`${randomAuthor.author}`}</p>
      <button className='card__btn' onClick={changeState} style={objectBgStyle}>&#62;</button>
      
      </div>
 
    
    

  )
}

export default Button