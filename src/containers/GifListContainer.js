import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{
  state = {
    gifsList: [],
    searchTerm: ''
  }

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm: searchTerm })
  }

  renderGifsItems = () => {
      return this.state.gifsList.map( (gif, idx) => 
        <li key={idx}>
          <img src={gif.images.original.url} alt="gif"/>
        </li>
      )
  }

  handleSubmit = event => {
    event.preventDefault()
    this.makeFetch(this.state.searchTerm)
  }

  render() {
    return (
      <div className='ui grid container'>
        <GifList renderGifsItems={ this.renderGifsItems } />
        <GifSearch 
          handleSubmit={ this.handleSubmit }
          updateSearchTerm={ this.updateSearchTerm }
          searchTerm={this.state.searchTerm}
        />
      </div>
    )
  }

  componentDidMount() {
    this.makeFetch('home')
  }

  makeFetch = (searchTerm) => {
    const giphyUrl = 
    `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=LdqFpGbdt8l1Af0effJaCWjhLwLO2tR9&rating=g`

    fetch(giphyUrl)
      .then(resp => resp.json())
      .then(gifs => this.updateState(gifs.data.slice(0, 3)))
  }

  updateState = gifsArray => {
    this.setState({ gifsList: gifsArray })
  }
}

export default GifListContainer
