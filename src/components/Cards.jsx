import React,{useContext, useEffect, useState} from 'react'
import movieContext from '../../createContext';
import { Link } from 'react-router-dom';
function Cards(props) {
  const {title,image} = props;
  const value = useContext(movieContext)
 
  
  const clickHandler = (e) =>{
    // value.CardDetailsApi(e.)
    value.CardDetailsAPi(e.target.title)
    
  }
  
  return (
    <>
         <Link to='/card-database'><div onClick={clickHandler} className="card h-[20vw] w-[12vw] space-y-2 cursor-pointer hover:scale-90 transition duration-150 ease-in-out ">
            <img className='h-[80%] w-full rounded-md ' src={image} alt="" title={title} />
            <div className="name text-center w-[13vw] ">
              <p className='text-base text-white h-[5vw] overflow-hidden ' title={title}>{title}</p>
            </div>
          </div>
          </Link>
    </>
  )
}

export default Cards
