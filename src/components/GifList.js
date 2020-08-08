import React from 'react'

const GifList = (props) => {
 
  let { renderGifsItems } = props

  return (
      <ul className='ten wide column'>
        {renderGifsItems()}
      </ul>
  )
}

export default GifList
