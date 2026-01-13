import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Navigation, Autoplay } from 'swiper/modules'
import github from './github.png'
import rocket from './rocket.png'
import 'swiper/css'
import 'swiper/css/navigation'


export default function Projectcard({project}) {
  return (
    <div className="mt-5 w-[90%] flex h-[300px]">

      {/* Card */}
      <div className="relative w-full md:w-[420px]   shadow-md rounded-md overflow-hidden flex flex-col items-center justify-center">


        <button
          className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-50
          w-9 h-9 bg-white rounded-full shadow flex items-center justify-center
          text-lg hover:scale-110 transition"
        >
          ❮
        </button>

        <button
          className="next-btn absolute right-2 top-1/2 -translate-y-1/2 z-50
          w-9 h-9 bg-white rounded-full shadow flex items-center justify-center
          text-lg hover:scale-110 transition"
        >
          ❯
        </button>


        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = '.prev-btn'
            swiper.params.navigation.nextEl = '.next-btn'
          }}
          className="w-[100%] h-full"
        >

          <SwiperSlide className='w-full h-full'>
            <picture>

              <source media="(max-width:768px)" src={project.mobilecover} />
              <img
                src={project.desktopcover}
                alt="Desktop view"
                className="w-[100%] object-cover object-top opacity-90 brightness-75 h-full relative "
              />

              <div className='absolute inset-0 flex items-center justify-center gap-3 md:gap-5'>
                <Link to={project.projectlink}>

                  <button className=' bg-sky-600 bg-opacity-90 text-white rounded-lg text-[10px] py-1 gap-1 text-[poppins] w-[85px] md:w-[120px] md:text-base font-semibold flex justify-center items-center'>
                    <img className='w-4 h-4' src={rocket} alt="" />

                    View Demo
                  </button>
                </Link>
                <button className=' bg-sky-600 bg-opacity-90 text-white rounded-lg text-[10px]  py-1 gap-1 text-[poppins] w-[85px] md:w-[120px] md:text-base font-semibold flex justify-center items-center'>

                  <img className='w-4 h-4' src={github} alt="" />
                  <a href="https://github.com/Codejourney01/TailwindPractice" target='_blank'>
                    View Repo
                  </a>

                </button>
              </div>
              <div className=' absolute bottom-0 bg-white bg-opacity-90 w-full h-[50px] flex items-center justify-between px-3'>
                <div>
                  <h1 className='text-sky-600  rounded-sm p-2 font-semibold  text-[12px] md:text-xl font-[Poppins] spacing'>{project.projectname}</h1>
                </div>
                <div className='flex gap-2 md:gap-3'>
                  <div className='font-[Poppins] text-[9px] md:text-[13px] bg-sky-600 flex items-center justify-center p-1 rounded-lg text-white'>
                    ReactJs
                  </div>
                  <div className='font-[Poppins] text-[9px] md:text-[13px] bg-sky-600 flex items-center justify-center p-1 rounded-lg text-white'>

                    TailwindCSS
                  </div>
                </div>
              </div>
            </picture>

          </SwiperSlide>

          <SwiperSlide className='w-full  h-full'>
            <Link to={project.projectlink}>
              <img
                src={project.secondcover}
                alt="Mobile view"
                className="w-full h-[full] transition relative"
              />
                <div className=' absolute bottom-0 bg-white bg-opacity-90 w-full h-[50px] flex items-center justify-between px-3'>
                <div>
                  <h1 className='text-sky-600  rounded-sm p-2 font-semibold  text-[12px] md:text-xl font-[Poppins] spacing'>Job Searching UI</h1>
                </div>
                <div className='flex gap-2 md:gap-3'>
                  <div className='font-[Poppins] text-[10px] md:text-[13px] bg-sky-600 flex items-center justify-center p-1 rounded-lg text-white'>
                    ReactJs
                  </div>
                  <div className='font-[Poppins] text-[10px] md:text-[13px] bg-sky-600 flex items-center justify-center p-1 rounded-lg text-white'>

                    TailwindCSS
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='w-full  h-full'>
            <Link to="/filterTask">
              <img
                src={project.thirdcover}
                alt="Mobile view"
                className="w-full h-[full] transition relative" 
              />
                <div className=' absolute bottom-0 bg-white bg-opacity-90 w-full h-[50px] flex items-center justify-between px-3'>
                <div>
                  <h1 className='text-sky-600  rounded-sm p-2 font-semibold  text-[12px] md:text-xl font-[Poppins] spacing'>Job Searching UI</h1>
                </div>
                <div className='flex gap-2 md:gap-3'>
                  <div className='font-[Poppins] text-[10px] md:text-[13px] bg-sky-600 flex items-center justify-center p-1 rounded-lg text-white'>
                    ReactJs
                  </div>
                  <div className='font-[Poppins] text-[10px] md:text-[13px] bg-sky-600 flex items-center justify-center p-1 rounded-lg text-white'>

                    TailwindCSS
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>

        </Swiper>


      </div>
    </div>
  )
}
