import React,{useContext, useState} from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import movieContext from '../../createContext';
import { Link } from 'react-router-dom';

function Navbar() {
    const data = useContext(movieContext)
    const [value,setValue] = useState("")
    const inputHandler = (e) =>{
        setValue(e.target.value)
    }
    const searchHandler = ()=>{
        data.SearchingDataApi(value)
        // console.log(value.length)

    }
    
        // let data = value.split(/\s+/)
        // let allValue = " "
        // for(let i=0; i < data.length;i++){
        //     let c = data[i].charAt(0).toUpperCase()
        //     let part = data[i].slice(1)
        //     allValue=allValue +(c+part + " ")

        // }
        // console.log(allValue)


    
    return (
    <>
            <div className='bg-transparent space-y-3 flex justify-between  px-3 py-5 flex-wrap'>
                <div className="nav1 flex flex-wrap gap-x-12 justify-center md:justify-between text-3xl lg:text-xl items-center ">
                    <div className="logo text-white text-4xl  lg:text-3xl font-bold leading-10 cursor-pointer">Dil<span className='text-red-600 mx-1.5 '>MOVIES </span></div>

                    <div className="category text-white mx-3 md:mx-0">
                        <ul className="flex gap-3">
                            <li className=""><NavLink to="/Movies-Database/" className={({isActive})=>{ return `${isActive ? "text-red-500" :""} hover:text-red-500`}} >Home</NavLink></li>
                            <li className=" "><NavLink to="/allmovies" className={({isActive})=>{return `${isActive ?  "text-red-500" :""} hover:text-red-500`}}>Movies</NavLink></li>
                            <li className=" "><NavLink to="/allseries" className={({isActive})=>{return `${isActive ?  "text-red-500" :""} hover:text-red-500`}}>Series</NavLink></li>
                            <li className=" "><NavLink to="/allcartoons" className={({isActive})=>{return `${isActive ?  "text-red-500" :""} hover:text-red-500`}}>Cartoon</NavLink></li>

                        </ul>
                    </div>
                </div>

               <div className="flex flex-wrap lg:flex-nowrap justify-center  md:w-fit md:justify-between  md:items-center md:space-x-7">
                   <div className="nav2 w-[95vw] lg:w-[28vw]  text-white border border-white text-lg rounded-2xl flex gap-2 items-center justify-between">
                       <div className="flex items-center">
                        <FaMagnifyingGlass className='text-3xl  ml-2' />
                        <input onChange = {inputHandler} className='px-1 py-2  w-[55vw] lg:w-[19vw] bg-transparent outline-none placeholder:text-white' type="text" placeholder='Search Movies Series And Others'  />
                        </div>
                       <Link to={value.length != 0 ?'/searching-data' : ""}><button onClick={searchHandler} className="bg-white text-black py-2 px-4
                         rounded-e-xl">Search</button></Link>
                    </div>

                    <div className="btn mt-4 lg:mt-0 md:w-full lg:w-[39%] space-x-28 md:space-x-3 text-white text-lg flex justify-between items-center ">
                        <button className='px-5 py-2 rounded-lg border-2 border-white hover:bg-white hover:text-black mx-2' >Login</button>
                        <button className='px-5 py-2 rounded-lg border-2 border-white hover:bg-white hover:text-black mx-2' >Register</button>
                    </div>
                 </div>
                </div>
               
            </>
            )
}

            export default Navbar
