import React, { useEffect, useState } from 'react'
import bgdesk from './bg-header-desktop.svg' 
import bgmob from './bg-header-mobile.svg'
import arrow from './arrow-right-1-svgrepo-com.svg'
import Jobcard from './jobcard.jsx'
import { NavLink } from 'react-router-dom'








export default function Main() {
  const [data,setData]=useState([])
  const [value,setvalue]=useState("")


  useEffect(()=>{
        fetch('data.json')
        .then((response)=>response.json())
        .then((jobdata)=>setData(jobdata))
  },[])

  const filterdata= data.filter(job=>
    job.position.toLowerCase().includes(value.toLowerCase())
  )
  return (
    <div>
       <div className="w-full h-32 bg-[#6EA2A3]">
        <picture className='w-full h-full'>
           <source srcSet={bgdesk} media='(min-width:768px)'/>
           <source srcSet={bgmob} media='(max-width:767px)'/>
           <img className='w-full h-full' src={bgdesk} alt="" />
        </picture>
        </div>
        <div className=" w-full pl-1 md:pl-8 ">
            <div className=" logo-container text-center text-[15px] md:text-[18px] pt-4 font-medium font-[Poppins] flex
                md:text-left md:pt-5">
                  <NavLink to="/">
            <img src={arrow} className="w-5 " alt=""/>

                  </NavLink>
            <h1 className="pl-[2px]">Open to Roles at Industry <span className="text-[#6EA2A3] sm:pl-1"> Leaders </span></h1>
    </div>
    <p className="text-slate-500 pl-5 text-[9px] pt-[3px] md:pl-6 md:text-[14px] font-normal text-justify w-full">We are
        actively seeking top talent for leading companies</p>
    </div>
    <div className=' w-[100%] mt-4 flex flex-col gap-5  box-border   pl-4 md:pl-12 md:pt-2 md:m-0 pb-5'>

            <div className="w-[90%] h-[40px] w-max[400px] flex-row flex  bg-white rounded-md :border-none  mt-3  items-center gap-3 md:gap-0 border-2 border-[#6EA2A3] ">
              
                <input value={value} onChange={(e)=>setvalue(e.target.value)} type="text" className='w-[90%] pl-3 md:pl-5  focus:outline-none placeholder:text-sm' placeholder='What Are You Looking For ?' />
              
              </div>
              </div>

    <div className=' w-[100%] mt-4 flex flex-col gap-5  box-border   pl-4 md:pl-12 md:pt-3 md:m-0 pb-9'>
     {
      filterdata.length > 0 ?(
      filterdata.map((job)=>(
        <Jobcard key={job.id} job={job} />
      ))):<p>Job Not Found </p>
     } 

    </div>
    </div>
  )
}
