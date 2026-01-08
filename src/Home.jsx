import React from 'react'
import github from './github.png'

export default function Home() {
  return (

    <div className='w-full h-dvh md:h-lvh bg-cover'>
       <div className='w-full text-left  text-black  pt-9 pl-4 md:pl-9'>
                <div className='w-full flex justify-between pr-2 md:pr-6'>
                <span className='md:text-4xl text-[14px] font-semibold'>Tailwind CSS Project Showcase</span>
                <a href="https://github.com/Codejourney01/TailwindPractice" target='_blank'>
                  <button className='bg-blue-400 text-white md:w-[120px] w-[70px] h-5 text-[7px] md:text-[13px] md:h-8 rounded-md font-bold hover:bg-black flex items-center justify-center gap-1'>
                    <img src={github} className='w-3' alt="" />
                     View Github </button>

                </a>
                
                </div>
                <div className='w-full flex justify-between pr-2 md:pr-6'>
                  </div>
                <p className='text-[8px]  md:text-base  text-slate-500 font-normal pl-1 md:pt-2 md:pl-2'>Real-world UI projects built with Tailwind + React</p>
       </div>
    </div>
  )
}
