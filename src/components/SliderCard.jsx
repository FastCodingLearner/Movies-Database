import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom' 
function SliderCard(props) {

const {contentName,contentType,path} = props;

  
  return (
    <>
        <h1 className='text-3xl lg:text-xl font-semibold text-white mx-6 '>{contentName}</h1>
      <div className="bg-transparent text-white w-full  overflow-x-auto px-5 scroll-hidden ">
        <div className="container  flex gap-5 w-full h-[58vw] overflow-y-hidden scroll-hidden md:h-auto lg:h-[22vw]">
            
       {contentType.map((val,i)=>{return <Cards key={i} title={val.Title} image={val.Poster==='N/A'? 'https://www.shutterstock.com/shutterstock/photos/89051818/display_1500/stock-vector-no-picture-image-internet-error-thumbnail-89051818.jpg' : val.Poster} />})}
       
       <Link to={path} ><div  className="w-[27vw] h-[65%] md:h-[33vw] lg:h-[15vw] lg:w-[12vw] space-y-2 flex justify-center items-center border rounded-md border-white cursor-pointer hover:scale-90 transition duration-150 ease-in-out hover:delay-200"  >
           <p className="w-[12vw] text-center  text-lg font-semibold text-slate-300" >More </p>
          </div></Link>

         
    </div>
    </div>
    
    </>

    
  )
}

export default SliderCard
