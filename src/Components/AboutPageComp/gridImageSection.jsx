import React from 'react';
import Img1 from '../../../public/pexelsFive.jpg'
import Img2 from '../../../public/pexelsFour.jpg'
import Img3 from '../../../public/pexelsSeven.jpg'
import Image from 'next/image';
export default function GridImageSectionAbout (){

    return(

       <div className='w-[85%] mx-auto'>

        <div className='grid grid-col-1 mt-2 sm:grid-cols-3 gap-6 '>
        <Image data-aos="zoom-in" src={Img1} width={300} height={120} alt='img' priority className='w-full h-[300px] duration-300 hover:scale-105'/>
        <Image data-aos="zoom-in" src={Img2} width={300} height={120} alt='img' priority className='w-full h-[300px] duration-300 hover:scale-105'/>
        <Image data-aos="zoom-in" src={Img3} width={300} height={120} alt='img' priority className='w-full h-[300px] duration-300 hover:scale-105'/>

         
        </div>
       </div>

    )

}