import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
const FlexPageCards = () => {
  return (
    <div className='pt-7 md:pt-3 w-full' data-aos="fade-right">
      <h1 className='text-center font-bold text-[20px] py-1 text-[#a33cc2] uppercase underline underline-offset-4'>Heading</h1>
      <div  
      
      
      className="grid grid-col-1 md:grid-cols-3 text-[#615d5d] justify-center ">

      <div className="hover:bg-[#f8f5f5] duration-300 bg-white shadow-lg mx-4 my-4 border rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[25px] text-[#a33cc2] capitalize underline underline-offset-4">Heading</h1>
       
       </div>
        <p className=' font-sans text-[14px] md:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt asperiores nulla, unde odio nesciunt neque mollitia animi consequatur labore dicta maxime odit eligendi praesentium consectetur autem. Odio adipisci sapiente vero atque dignissimos in impedit praesentium facilis, sint consectetur? Aliquam iure reprehenderit deserunt, aspernatur laboriosam assumenda modi excepturi et ab.</p>
       
      </div>

      <div className="hover:bg-[#f8f5f5] duration-300 bg-white shadow-lg mx-4 my-4 border rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[25px] text-[#a33cc2] capitalize underline underline-offset-4">Heading</h1>
       
       </div>
        <p className=' font-sans text-[14px] md:text-[16px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt asperiores nulla, unde odio nesciunt neque mollitia animi consequatur labore dicta maxime odit eligendi praesentium consectetur autem. Odio adipisci sapiente vero atque dignissimos in impedit praesentium facilis, sint consectetur? Aliquam iure reprehenderit deserunt, aspernatur laboriosam assumenda modi excepturi et ab.</p>
       
      </div>
      <div className="hover:bg-[#f8f5f5] duration-300 bg-white shadow-lg mx-4 my-4 border rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[25px] text-[#a33cc2] capitalize underline underline-offset-4">Heading</h1>
       
       </div>
        <p className=' font-sans text-[14px] md:text-[16px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt asperiores nulla, unde odio nesciunt neque mollitia animi consequatur labore dicta maxime odit eligendi praesentium consectetur autem. Odio adipisci sapiente vero atque dignissimos in impedit praesentium facilis, sint consectetur? Aliquam iure reprehenderit deserunt, aspernatur laboriosam assumenda modi excepturi et ab.</p>
       
      </div>
     
    </div>
    </div>
  )
}

export default FlexPageCards
