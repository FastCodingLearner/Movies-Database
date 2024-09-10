import React from 'react'
import loading from './loading.gif'

function Spinner() {
  return (
    <div className='flex justify-center m-5'>
      <img className="w-[5vw]" src={loading} alt="" />
    </div>
  )
}

export default Spinner
