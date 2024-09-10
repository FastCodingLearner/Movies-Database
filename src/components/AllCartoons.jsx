import React, { useContext } from 'react'
import movieContext from '../../createContext';
import AllContentTemp from './AllContentTemp'



function AllCartoons() {

  const value = useContext(movieContext)
  return (
    <>
     <AllContentTemp contentName="Cartoons" contentType={value.allCartoon} fetchMoreData={value.cartoonMoreData} />
    </>
  )
}

export default AllCartoons
