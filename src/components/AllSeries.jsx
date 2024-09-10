import React, { useContext } from 'react'
import movieContext from '../../createContext';
import AllContentTemp from './AllContentTemp'



function AllSeries() {

  const value = useContext(movieContext)

  return (
    <>
      <AllContentTemp contentName="Series" contentType={value.allSeries} fetchMoreData={value.seriesMoreData} />
    </>
  )
}

export default AllSeries
