import React from 'react'

const GifSearch = props => {
    return (
      <div className='three wide column'>
        <form className="ui form">
          <div className='field'>
            <label>Enter a Search Term:</label>
            <input
              onChange={e => props.updateSearchTerm(e.target.value)}
              className="field"
              placeholder='Search gifs...'
              value={props.searchTerm}
            ></input>
          </div>
          <button
            className="ui blue button"
            onClick={ event => props.handleSubmit( event ) }
            type='submit'
          >Find Gifs</button>
        </form>
      </div>
    )
}

export default GifSearch
