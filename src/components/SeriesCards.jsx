import React,{useContext} from 'react'
import movieContext from '../../createContext'
import SliderCard from './SliderCard'

function SeriesCards() {
  const value = useContext(movieContext)

  return (
    <>
           <SliderCard contentName="Series" contentType={value.series} path="/allseries" />


    </>
  )
}

export default SeriesCards
