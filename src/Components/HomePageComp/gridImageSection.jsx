import React from 'react';
import Img1 from '../../../public/three.jpg'
import Img2 from '../../../public/four.jpg'
import Img3 from '../../../public/five.jpg'
import Image from 'next/image';
export default function GridImageSection (){

    return(

       <div className='w-[85%] mx-auto'>
              <h1 className='text-center font-bold text-[20px] py-1 text-[#a33cc2] uppercase underline underline-offset-4'>Gallery</h1>

        <div className='grid grid-col-1 mt-2 sm:grid-cols-3 gap-6 '>
        <Image data-aos="zoom-in" src={Img1} width={300} height={120} alt='img' priority className='w-full h-[300px] duration-300 hover:scale-105'/>
        <Image data-aos="zoom-in" src={Img2} width={300} height={120} alt='img' priority className='w-full h-[300px] duration-300 hover:scale-105'/>
        <Image data-aos="zoom-in" src={Img3} width={300} height={120} alt='img' priority className='w-full h-[300px] duration-300 hover:scale-105'/>

         
        </div>
       </div>

    )

}