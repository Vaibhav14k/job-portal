import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { RiHandCoinFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { SiAdobeacrobatreader } from "react-icons/si";
import { GrView } from "react-icons/gr";
import { VscGlobe } from "react-icons/vsc";
import { GrLocation } from "react-icons/gr";
import { BiSolidCoinStack } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";

const App = () => {
  return (

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
        <div className=' hover:text-amber-600 border-y-2 h-20 flex  items-center justify-start gap-10 text-xl  pl-20 ' >
          <h4 >Job preview</h4>
          <h4>Applicants</h4>
          <h4>Match</h4>
          <h4>Messages</h4>
        </div>
        <div className='w-full h-full flex  ' >
          <div className='w-3/4 border-r-2 h-3/4  ' >
            <div className='border-b-2' >
              <div className='pl-20 pt-8 flex gap-4   ' >
              <h4 className='text-6xl font-bold ' >Senior Product Designer</h4>
              <p className='pt-2' >posted 2 days ago</p>
              <p className='bg-green-400 rounded-full h-6 mt-2 pl-2 w-14 ' >  open</p>
              </div >
              <div className='flex items-center mb-10 ml-20 mt-8 gap-2   ' >
              <GrLocation />
              <p>Delaware,USA</p>
              <BiSolidCoinStack />
              <p>$300K-$400K</p>
              </div>
            </div>
            <div className='h-48 flex gap-20  border-b-2' >
              <div className='ml-20 mt-8 font-semibold ' >
                <p>Skills Required</p>
                <div className='flex mt-2 rounded-lg gap-2  items-center border-2 w-20 justify-center ' >
                <FaFigma />
                <p>Figma</p> 
                </div>
                <div className='flex rounded-lg gap-2 mt-4 items-center border-2 w-40 justify-center ' >
                <SiAdobeillustrator />
                <p>Adobe Illustrator</p> 
                </div>
                <div className='flex  mt-4 gap-2 rounded-lg items-center border-2 w-28 justify-center ' >
                <SiAdobexd />
                <p>Adobe XD</p> 
                </div>
              </div>
              <div className='ml-10 mt-8' >
                <p>preferred Language</p>
                <p className='font-bold mt-2' > English</p>
              </div>
              <div className='ml-10 mt-8' >
                <p>Type</p>
                <p className='font-bold mt-2' > Full Time</p>
              </div>
              <div className='ml-10 mt-8' >
                <p>Years Of Experience</p>
                <p className='font-bold mt-2' > 3+ Years Of Experience</p>
              </div>
            </div>
            <div className='ml-20 pb-10 mt-10' >
              <p>About the job</p>
              <div className='font-semibold  border-2  gap-y-10  '>
              <p>1.Handle the ul/ux reserch design</p>
              <p>2.Work on reserching  on latest web application designs & trends </p>
              <p>3.Work on conceptuallzing and visuallzing</p>
              <p>Benefits:</p>
              <p className='ml-4' >1.Health Insureance</p>
              <p className='ml-4' >2.Provident Fund</p>
              <p>Schedule:</p>
              <p className='ml-4' >1.Day shift</p>
              <p>Supplement pay types:</p>
              <p className='ml-4' >1.Performance bonus</p>
              <p className='ml-4' >2.Yearly bonus</p>
              <p>Work Loaction:Pune</p>
              </div>
            </div>
            <div className='border-t-4' >adfsdf
              <div className='ml-20 gap-6 flex mt-10  h-80' >
                <div className=' w-96 text-2xl ' >
                  <p>Company Size</p>
                  <p className='font-semibold mb-4 mt-2  '>1K-2K</p>
                  <p>Sector </p>
                  <p className='font-semibold mb-4 mt-2 '>Information Technolgy Infrasture</p>
                  <p>Founded In </p>
                  <p className='font-semibold mb-4  mt-2 '>2019</p>
                </div>
                <div className='  w-96 text-2xl ' >
                <p>Type</p>
                  <p className='font-semibold mb-4 mt-2 '>Private</p>
                  <p>Funding </p>
                  <p className='font-semibold mb-4 mt-2 '>Bootstarpped</p>
                  <p>Founded By </p>
                  <p className='font-semibold mb-4 mt-2 '>Scott Farqukhar,Mike</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/4 h-3/4' >
              <div className='flex  text-lg gap-10 mx-10 my-10 ' >
              <div className='flex gap-2 h-10 rounded-lg bg-orange-200 items-center justify-center w-48 border-2 ' >
              <MdDelete />
              <p>Delete Job</p>
              </div>
              <div className='flex gap-2 rounded-lg text-white bg-orange-700 items-center justify-center  w-48 border-2  '  >
              <MdEdit />
              <p>Edit Job</p>
              </div>
              </div>
              <div className='flex text-2xl mt-10 gap-20 ml-10 border-b-2  pb-4' >
              <SiAdobeacrobatreader />
              <p>Applicants</p>
              <p>400</p>
              </div>
              <div className='flex text-2xl mt-10 gap-20 ml-10 border-b-2  pb-4' >
              <VscGlobe />
              <p>Matches</p>
              <p>100</p>
              </div>
              <div className='flex text-2xl mt-10 gap-16 ml-10 border-b-2  pb-4' >
              <LuMessageSquare />
              <p>Messages</p>
              <p>147</p>
              </div>
              <div className='flex text-2xl mt-10 gap-24 ml-10 border-b-2  pb-4' >
              <GrView />

              <p>View</p>
              <p>800</p>
              </div>

          </div>
        </div>
    </div>
    
  )
}

export default App
