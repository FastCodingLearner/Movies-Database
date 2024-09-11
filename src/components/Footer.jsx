import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";


function Footer() {
  return (
    <>
      <div className=" py-5 px-12 space-y-6 text-white w-full border-t border-t-slate-400">
        <div className="section1 w-full flex flex-col md:flex-row items-center md:justify-between  text-3xl text-white">

          <div className="logo py-3 w-full text-center md:w-[16vw] border-b  boredr-b-slate-700  font-bold leading-10 cursor-pointer">Dil<span className='text-red-600 mx-1.5 '>MOVIES </span>
          </div>


          <div className="social flex mx-7 py-3 w-[30vw] lg:w-[16vw] border-b gap-2 boredr-b-slate-700 ">
            <FaFacebookSquare className='cursor-pointer hover:scale-125 transition duration-500' />
            <FaInstagram className='cursor-pointer hover:scale-125 transition duration-500' />
            <FaTwitter className='cursor-pointer hover:scale-125 transition duration-500' />
            <IoLogoLinkedin className='cursor-pointer hover:scale-125 transition duration-500' />

          </div>
        </div>


        <div className="section2 border-b border-b-slate-400 py-8 text-white text-base md:text-lg lg:text-base flex md:justify-between justify-between flex-wrap">
          <div className="space-y-5 m-2">
            <h2 className='text-slate-300 font-semibold '>COMPANY</h2>
            <div className="service leading-tight lg:text-sm md:text-base text-sm">
              <p className='hover:text-slate-300 cursor-pointer' >About Us</p>
              <p className='hover:text-slate-300 cursor-pointer'>Careers</p>
              <p className='hover:text-slate-300 cursor-pointer'>Contact</p>
            </div>
          </div>
          <div className="space-y-5 m-2">
            <h2 className='text-slate-300 font-semibold '>
            SUPPORT</h2>
            <div className="service leading-tight text-sm lg:text-sm md:text-base">
              <p className='hover:text-slate-300 cursor-pointer'>Contact Support
              </p>
              <p className='hover:text-slate-300 cursor-pointer'>Help Center</p>
              <p className='hover:text-slate-300 cursor-pointer'>Supported Devices</p>
              <p className='hover:text-slate-300 cursor-pointer'>Activate Your Device</p>
             <p className='hover:text-slate-300 cursor-pointer'> Accessibility</p>
            </div>
          </div>
          <div className="space-y-5 m-2">
            <h2 className='text-slate-300 font-semibold '>PARTNERS</h2>
            <div className="service leading-tight text-sm lg:text-sm md:text-base">
              <p className='hover:text-slate-300 cursor-pointer'>Advertise with Us</p>
             
              <p className='hover:text-slate-300 cursor-pointer'> Partner with Us</p>
             
            </div>
          </div>
          <div className="space-y-5 m-2">
            <h2 className='text-slate-300 font-semibold '>
            GET THE APPS</h2>
            <div className="service leading-tight text-sm lg:text-sm md:text-base">
              <p className='hover:text-slate-300 cursor-pointer'>iOS</p>
              <p className='hover:text-slate-300 cursor-pointer'>Android</p>
              <p className='hover:text-slate-300 cursor-pointer'>Roku</p>
              <p className='hover:text-slate-300 cursor-pointer'>Amazon Fire</p>
            </div>
          </div>
          <div className="space-y-5 m-2">
            <h2 className='text-slate-300 font-semibold '>PRESS</h2>
            <div className="service leading-tight text-sm lg:text-sm md:text-base">
            <p className='hover:text-slate-300 cursor-pointer' >Press Releases</p>
            <p className='hover:text-slate-300 cursor-pointer'>Tubi in the News</p>
            </div>
          </div>
          <div className="space-y-5 m-2">
            <h2 className='text-slate-300 font-semibold '>
            LEGAL</h2>
            <div className="service leading-tight text-sm lg:text-sm md:text-base">
              <p className='hover:text-slate-300 cursor-pointer'> Privacy Policy (Updated)</p>
              <p className='hover:text-slate-300 cursor-pointer'>Terms of Use (Updated)</p>
              <p className='hover:text-slate-300 cursor-pointer'>Cookies</p>
            </div>
          </div>
        </div>

        <div className="section3 py-9 space-y-10">
          <div className="download flex justify-center gap-5 flex-wrap">
            <img src="https://d0.tubitv.com/web-k8s/dist/img/1b22a34a6065.svg" className='cursor-pointer hover:scale-125 transition duration-500' alt="" />
            <img src="https://d0.tubitv.com/web-k8s/dist/img/841c5b0a2bd7.svg" className='cursor-pointer hover:scale-125 transition duration-500' alt="" />
            <img src="https://d0.tubitv.com/web-k8s/dist/img/fc2de1bd0a4d.svg" className='cursor-pointer hover:scale-125 transition duration-500' alt="" />
          </div>
         <div className="copyright text-slate-300 text-sm md:text-xs">
          <p className="text-center">Copyright &copy; 2024 Tubi, Inc.</p>
          <p className="text-center mt-6">Dil Movies is a registered trademark of Dilshad, Inc.</p>
          <p className="text-center mb-6">All rights reserved.</p>
          <p className="text-center">Device ID: cc9b5514-b102-4b62-ac87-e2467f57333d</p>
         </div>
        </div>
      </div>
    </>
  )
}

export default Footer
