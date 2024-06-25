import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { RiHandCoinFill } from "react-icons/ri";

const App = () => {
  return (
    <div className='bg-gray-200' >
      <div className=' bg-white w-auto h-screen border-2 mx-28 my-10  ' >
        <div className='navbar h-20 w-full flex justify-between   items-center   px-10 ' >  
        <div className='border-2 h-10 w-20 pl-4 pt-2  bg-zinc-200 font-bold text-lg' >logo</div>
          <div className='w-96 flex px-2 items-center justify-between h-14 border-2 rounded-full '>
              <div className='flex  bg-orange-400 items-cente gap-2 pt-2 pl-2 w-20 border-2  rounded-full  ' >
              <FaShoppingBag />
              <p>Jobs</p>
              </div>
              <div className='flex gap-2  text-base  ' >
              <LuMessageSquare />
              <p className='font-light ' >Messages</p>
              </div>
              <div className='flex gap-2  ' >
              <RiHandCoinFill />
              <p className='font-light' >Payments</p>
              </div>
          </div>
          <div className='h-10 w-20 border-2 text-2xl pt-2 ' >
          < IoMdNotifications />
          
          </div>
        </div>
        <div className='border-y-2 h-20 flex  items-center justify-start gap-5 text-xl  pl-20 ' >
          <h4>Job preview</h4>
          <h4>Applicants</h4>
          <h4>Match</h4>
          <h4>Messages</h4>
        </div>
    </div>
    </div>
  )
}

export default App
