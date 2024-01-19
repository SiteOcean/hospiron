import React from "react";
import Img1 from '../../../public/one.jpg'
import Img2 from '../../../public/two.jpg'

import Img3 from '../../../public/three.jpg'
import Image from "next/image";
const Banner = () => {
  
    return (
      <div>
        <div className="min-h-[50vh] hover:text-[#d366f5] flex justify-center items-center bg-gradient-to-r from-pink-100  to-[#f0d4f8] text-center  text-[#a33cc2] font-bold text-[50px]">
      About
  </div>


  <div className='pt-7 md:pt-3 w-full sm:w-[85%] mx-auto' data-aos="fade-right">
      <h1 className='text-center font-bold text-[20px] py-1 text-[gray] uppercase underline underline-offset-4'>heading</h1>
      <div
      className="grid grid-col-1 text-[#615d5d] justify-center ">

      <div className="hover:bg-[#f8f5f5] bg-white shadow-xl mx-4 my-4  rounded-lg overflow-hidden flex p-5 space-y-2 ">
       <div className='flex flex-col justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[25px] text-[#a33cc2] capitalize underline underline-offset-4">Our Service</h1>
       <p className=' font-sans text-[14px] md:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt asperiores nulla, unde odio nesciunt neque mollitia animi consequatur labore dicta maxime odit eligendi praesentium consectetur autem. Odio adipisci sapiente vero atque dignissimos in impedit praesentium .</p>
       </div>

      </div>


      <div className="hover:bg-[#f8f5f5] bg-white shadow-lg mx-4 my-4  rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[25px] text-[#a33cc2] capitalize underline underline-offset-4">Our Value</h1>
       
       </div>
        <p className=' font-sans text-[14px] md:text-[16px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt asperiores nulla, unde odio nesciunt neque mollitia animi consequatur labore dicta maxime odit eligendi praesentium .</p>
       
      </div>


      <div className="hover:bg-[#f8f5f5] bg-white shadow-lg mx-4 my-4  rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[25px] text-[#a33cc2] capitalize underline underline-offset-4">Our Mission</h1>
       
       </div>
        <p className=' font-sans text-[14px] md:text-[16px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt asperiores nulla, unde odio nesciunt neque mollitia animi consequatur labore dicta maxime odit eligendi </p>
       
      </div>
     
    </div>
    </div>
      </div>
    );
  };
  
  export default Banner;
  