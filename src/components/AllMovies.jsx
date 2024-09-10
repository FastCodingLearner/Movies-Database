import React,{useContext} from 'react'
import movieContext from '../../createContext'
import AllContentTemp from './AllContentTemp'

function AllMovies() {
  const value = useContext(movieContext)


  return (
   <>
   <AllContentTemp contentName="Movies" contentType={value.allMovies} fetchMoreData={value.fetchMoreData} />
   </>
  )
}

export default AllMovies
