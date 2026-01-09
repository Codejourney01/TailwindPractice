import React from 'react'

export default function Jobcard({job}) {
    return (
        <div>
            <div className="w-[90%] w-max[400px] md:flex-row flex-col flex pb-5 bg-white shadow-md  mt-3  px-6 md:px-9 md:justify-between gap-3 md:gap-0 ">
                <div className="flex flex-col gap-3 md:gap-5  md:pt-1 md:flex-row ">
                    <div className="flex items-center pt-5 md:pt-0">
                        <img src={job.logo} className="w-[80px]" alt=""/>
                    </div>
                    <div className="pt-3">
                        <div className="flex gap-2">
                            <div className="font-[Poppins] text-[#6EA2A3] font-medium text-sm">
                                {job.company}
                            </div>
                            <div className="flex text-white text-[8px] gap-2">
                                {job.new && (
                                    <button className="uppercase bg-[#6EA2A3] w-12 rounded-xl p-1 text-white">
                                        {job.new}
                                    </button>
                                )}
                                <button className="uppercase bg-[#000000] w-12 rounded-xl p-1">
                                   {job.featured}
                                </button>
                            </div>
                        </div>
                        <div
                            className="text-black text-[16px] md:text-[15px] font-semibold font=[Poppins] pt-3 md:pt-2 hover:text-[#6EA2AE] cursor-pointer">
                          {job.position}
                        </div>
                        <div className="flex text-[10px] md:text-[12px] gap-7 md:justify-between md:gap-3 text-slate-500 px-2 pt-1">
                            <span> {job.postedAt} </span>
                            <span> {job.contract} </span>
                            <span>{job.location}</span>
                        </div>
                    </div>

                </div>
                <div className="flex   pt-1 md:pt-0 items-center uppercase text-[#6EA2AE] gap-4 md:gap-3 flex-wrap text-[9px] md:text-[11px] md:flex-nowrap">
                    <button className=" uppercase bg-neutral-100 rounded-sm p-[5px] font-semibold">
                       {job.role}
                    </button>
                    <button className="uppercase bg-neutral-100 rounded-sm p-[5px] font-semibold">{job.level}</button>
                    <button className="uppercase bg-neutral-100 rounded-sm p-[5px] font-semibold">{job.languages?.[0]}</button>
                    <button className="uppercase bg-neutral-100 rounded-sm p-[5px] font-semibold">{job.languages?.[1]}</button>
                    <button className="uppercase bg-neutral-100 rounded-sm p-[5px] font-semibold">{job.tools?.[0]}</button>

                </div>
            </div>
        </div>


    )
}
