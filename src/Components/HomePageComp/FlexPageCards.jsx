import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
const FlexPageCards = () => {
  return (
    <div className='mt-[50px] mb-[50px] w-full' data-aos="fade-right">
      <h1 className='text-center font-bold text-[30px] py-1 text-[#4cacec] '>HealthTech Solutions</h1>
      <div  
      
      
      className="grid grid-col-1 md:grid-cols-3 text-[#615d5d] justify-center ">

      <div className="hover:scale-105 duration-500 bg-white shadow-xl mx-4 my-4  rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[21px] text-[#4cacec] capitalize underline underline-offset-4">Precision Imaging</h1>
       
       </div>
        <p className=' font-sans text-[14px] text-stone-500 md:text-[16px]'>Experience unparalleled imaging clarity with our cutting-edge digital X-ray technology. Our systems empower radiologists to achieve precise diagnostics with minimal radiation exposure, ensuring patient safety and accurate results.</p>
       
      </div>

      <div className="hover:scale-105 duration-500 bg-white shadow-xl mx-3 my-3 sm:m-0  rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[21px] text-[#4cacec] capitalize underline underline-offset-4">Smart Pumps</h1>
       
       </div>
        <p className=' font-sans text-[14px] md:text-[16px] text-stone-500 '>Discover the future of infusion therapy with our state-of-the-art pumps. Designed for user-friendly operation and precise medication delivery, these pumps streamline treatment processes, allowing healthcare providers to focus on personalized care and improved patient outcomes.</p>
       
      </div>
      <div className="hover:scale-105 duration-500 bg-white shadow-xl mx-4 my-4  rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[21px] text-[#4cacec] capitalize underline underline-offset-4">Rapid Diagnostics</h1>
       
       </div>
        <p className=' font-sans text-[14px] md:text-[16px] text-stone-500'>Revolutionize diagnostics with our rapid testing solutions, providing quick and reliable results at the point of care. Ideal for urgent medical situations, these innovative tools empower healthcare professionals to make swift decisions, contributing to efficient and effective patient management.</p>
       
      </div>
     
    </div>
    </div>
  )
}

export default FlexPageCards
