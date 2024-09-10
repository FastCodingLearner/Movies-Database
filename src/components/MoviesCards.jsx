import React,{useContext} from 'react'
import movieContext from '../../createContext'
import SliderCard from './SliderCard'


function MoviesCards() {
  const value = useContext(movieContext)
  
  return (
    <>
      <SliderCard contentName="Movies" contentType={value.movie} path="/allmovies" />
    </>

    
  )
}

export default MoviesCards
