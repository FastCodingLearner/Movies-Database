import React,{useContext} from 'react'
import movieContext from '../../createContext'
import SliderCard from './SliderCard'


function CartoonCards() {
    const value = useContext(movieContext)
  
  return (
   <>
           <SliderCard contentName="Cartoons" contentType={value.cartoons} path="/allcartoons" />

    </>
  )
}

export default CartoonCards
