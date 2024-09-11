import React from 'react'
import { useContext } from 'react'
import movieContext from '../../createContext'
import { Link } from 'react-router-dom'
function Slider() {

    let value = useContext(movieContext)

    const sliderHandler = (e)=>{
        value.CardDetailsAPi(e.target.title)
    }

    return (
        <>
        <Link to='/card-database'><div className='w-[100vw] h-[60vw] md:h-[45vw] lg:h-[36vw] overflow-x-auto flex group scroll-hidden cursor-pointer' onClick={sliderHandler}>
            {/* flex overflow-x-auto */}
            <div className="scroll h-full  flex space-x-5 animate-scroll  group-hover:pause snap-center ">
                {/* animate-scroll */}


              { value.poster.map((val,i)=>{ 
                return <div key={i} className=" h-full w-[80vw] relative  flex  py-7 ">

                    <img className='h-full w-full rounded-3xl object-fill ' src={val.Poster} alt="" title={val.Title} />


                    <div className=" absolute bottom-12 left-4 h-auto md:bottom-16 md:left-8 flex items-center gap-3 text-lg md:text-2xl">
                        <span className="text-white font-bold leading-5 "title={val.Title}>{val.Title} - </span>
                        <p className=" px-3 py-0 bg-green-700 text-white rounded "title={val.Title}>
                            {val.Year}
                        </p>
                    </div>
                </div>
            })    
            }

            </div>

        </div>
        </Link>
        </>
    )
}

export default Slider
