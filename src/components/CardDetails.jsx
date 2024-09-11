import React,{useContext,useState}from 'react'
import movieContext from '../../createContext'
import Spinner from './Spinner'

function CardDetails() {

    const value = useContext(movieContext)
    const data = value.cardDetails
   

   
      
  return (
   <>
   { value.res ? <Spinner/> : 
   <div className="database w-full md:w-[97%] p-10 text-white">
    <div className="1 w-full lg:flex flex-wrap gap-x-7 ">
        <img src={data.Poster}alt="" className="rounded-lg" />
        
        <div className="space-y-7 w-full lg:w-[60vw]">
        <div className="">
            <h2 className="font-bold w-full lg:w-[66vw] text-4xl lg:text-5xl my-8">{data.Title}</h2>
            <p className="text-slate-300 flex items-center gap-x-3"><span className='font-semibold text-white'>IMDB : </span>⭐ {data.imdbRating}/10 <span className="text-yellow-600">|</span> <span className="text-purple-900 flex items-center gap-2">
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="ipc-icon ipc-icon--star-border-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path></svg>
              Rate  </span></p>
        </div>

        <div className="space-y-3">
            <h2 className="text-yellow-400 font-semibold text-xl md:text-3xl lg:text-xl">In Theaters Released {data.Released}</h2>
            <p className=" text-lg md:text-2xl lg:text-lg ">{data.Plot}</p>
        </div>
    <div className="flex justify-between text-xl md:text-2xl lg:text-xl flex-wrap w-[60vw]">
        <p className="font-semibold ">Type : <span className="text-slate-300 text-base md:text-lg lg:text-base">{data.Type}</span></p>
        <p className="font-semibold ">Genre : <span className="text-slate-300 text-base md:text-lg lg:text-base">{data.Genre}</span></p>
        <p className="font-semibold ">Language : <span className="text-slate-300 text-base md:text-lg lg:text-base">{data.Language}</span></p>
        <p className="font-semibold ">Country : <span className="text-slate-300 text-base md:text-lg lg:text-base">{data.Country}</span></p>
    </div>
        </div>
    </div>
   </div>
}
   </>
  )
}

export default CardDetails
