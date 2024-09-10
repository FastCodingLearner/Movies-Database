import React,{useContext} from 'react'
import movieContext from '../../createContext'
import AllContentTemp from './AllContentTemp'


function SearchCard() {
  const value = useContext(movieContext)
  

  return (
   <>
   <AllContentTemp contentName="Searching Items" contentType={value.searchData} fetchMoreData={value.searchMoreData} />
   </>
  )
}

export default SearchCard
