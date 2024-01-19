// Carousel.js
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from 'next/image';
import Img1 from '../../../public/four.jpg'
import Img2 from '../../../public/logoWithName.jpg'
import Img3 from '../../../public/logo.jpg'

const Carousel = () => {
  const sliderRef = React.useRef(null);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true, 
    // autoplaySpeed: 2000,
  };

  return (
    <div className='relative w-full overflow-hidden'>
  
      <Slider {...settings} ref={sliderRef}>
      <div className='min-h-[85vh] flex justify-center items-center flex-col relative 
        '>
           <Image src={Img3} alt='banner' width={100} height={100} className='w-full z-0 opacity-20 h-[85vh] absolute top-0 right-0 left-0 '/>
        <div className='w-[90%] z-50 sm:w-[70%] mx-auto grid mt-[5vh] sm:mt-[20vh] justify-center text-center items-center'>
        <p className='text-[19px] z-50 sm:text-[30px] font-semibold text-[#474c50]'>Welcome to <span className="font-bold text-[26px] text-transparent bg-clip-text bg-gradient-to-r from-[#44dbae] to-[#4cacec] sm:text-[36px] tracking-wider">Hospiron</span> - An Innovative Startup Revolutionizing Healthcare with Cutting-Edge Medical Equipment!
        </p>
       
        <p className='text-[15px] z-50 sm:text-[17px] text-gray-500 mt-5 font-semibold w-[80%] mx-auto sm:w-[85%]'>At Hospiron, we're dedicated to transforming healthcare through cutting-edge medical equipment, enhancing patient care, streamlining processes, and elevating medical practices. Explore a new era of solutions with us as industry pioneers.
        <br /><br />
        Empowering healthcare professionals for unparalleled patient outcomes, we're on a mission to redefine care standards and revolutionize the healthcare experience. Join us in shaping a healthier and brighter future through relentless excellence and innovative commitment.</p>
       

    </div>
   
    </div>

    <div className='min-h-[85vh] relative flex justify-center items-center flex-col gap-5  
        '>
       <Image src={Img3} alt='banner' width={100} height={100} className='w-full z-0 opacity-20 h-[85vh] absolute top-0 right-0 left-0 '/>
        <div className='w-[90%] sm:w-[70%] text-center mx-auto grid mt-[10vh] sm:mt-[20vh] justify-center items-center'>
        <p className='text-[25px] z-50 sm:text-[35px] font-semibold text-[#44cea4]'>Why Choose Hospiron?</p>
        
        <p className='text-[15px] z-50 sm:text-[19px] text-gray-800 mt-5 font-semibold w-[80%] mx-auto sm:w-auto'>Embark on a journey of groundbreaking advancements with our cutting-edge medical equipment. We pride ourselves on staying at the forefront of technology, ensuring that our products redefine standards and set new benchmarks in the healthcare industry.
        <br />
        <br />
        From small clinics to large healthcare facilities, our medical equipment suits diverse needs. Tailored for uniqueness, our customizable solutions seamlessly integrate into your workflow.</p>
    </div>
   
    </div>

    <div className='min-h-[85vh] relative flex justify-center items-center flex-col gap-5 
        '>
      <Image src={Img3} alt='banner' width={100} height={100} className='w-full z-0 opacity-20 h-[85vh] absolute top-0 right-0 left-0 '/>
        <div className='w-[90%] sm:w-[70%] text-center mx-auto grid mt-[10vh] sm:mt-[20vh] justify-center items-center'>
        <p className='text-[25px] z-50 sm:text-[42px] font-semibold text-[#4cacec]'>Join Us in Shaping the Future of Healthcare:</p>
        
        <p className='text-[15px] z-50 sm:text-[19px] text-gray-800 mt-5 font-semibold w-[80%] mx-auto sm:w-auto'>At Hospiron, we invite healthcare professionals, institutions, and practitioners to join us on this exciting journey. Together, we can push the boundaries of what  s possible and create a future where healthcare is synonymous with excellence.
      <br />
      <br />
        Explore our website, discover the possibilities, and be a part of the medical revolution. Welcome to Hospiron Where Innovation Meets Healthcare Excellence!</p>
       
    </div>
   
    </div>


      </Slider>

   
        <button className='absolute sm:bg-gray-300 top-[50%] left-3 md:left-12 p-2 sm:p-3 border text-[20px] rounded opacity-50 hover:opacity-90 ' onClick={goToPrev}><GrPrevious className=''/></button>
        <button className='absolute sm:bg-gray-300 top-[50%] right-3 sm:right-12 p-2 sm:p-3 border text-[20px] rounded opacity-60 hover:opacity-90 animate-pulse' onClick={goToNext}><GrNext /></button>
     
    </div>
  );
};

export default Carousel;
