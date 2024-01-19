// Carousel.js
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from 'next/image';
import Img1 from '../../../public/one.jpg'
import Img2 from '../../../public/two.jpg'
import Img3 from '../../../public/three.jpg'

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
      <div className='min-h-[85vh] flex justify-center items-center flex-col  
        '>
      
        <div className='w-[90%] sm:w-[70%] mx-auto grid mt-[15vh] sm:mt-[20vh] justify-center text-center items-center'>
        <p className='text-[30px] sm:text-[50px] font-semibold text-[#a33cc2]'>Hospiron Business </p>
        <p className='text-[15px] sm:text-[19px] text-gray-500 mt-5 font-semibold w-[80%] mx-auto sm:w-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, perferendis. Inventore aperiam nihil eum, illum voluptas impedit dolorum vitae perspiciatis fuga quo quia omnis ab! Quae, unde quis delectus quas error provident aliquid sint assumenda molestias, voluptates quidem adipisci suscipit earum commodi numquam accusantium corporis voluptas omnis, nam tempore laboriosam. </p>
       

    </div>
   
    </div>

    <div className='min-h-[85vh] flex justify-center items-center flex-col gap-5 bg-gradient-to-r from-blue-300 to-purple-300 
        '>
      
        <div className='w-[90%] sm:w-[70%] text-center mx-auto grid mt-[15vh] sm:mt-[20vh] justify-center items-center'>
        <p className='text-[30px] sm:text-[50px] font-semibold text-white'>Hospiron Business </p>
        
        <p className='text-[15px] sm:text-[19px] mt-5 font-semibold w-[80%] mx-auto sm:w-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, perferendis. Inventore aperiam nihil eum, illum voluptas impedit dolorum vitae perspiciatis fuga quo quia omnis ab! Quae, unde quis delectus quas error provident aliquid sint assumenda molestias, voluptates quidem adipisci suscipit earum commodi numquam accusantium corporis voluptas omnis, nam tempore laboriosam. </p>
    </div>
   
    </div>

    <div className='min-h-[85vh] flex justify-center items-center flex-col gap-5 bg-gradient-to-r from-indigo-300 to-[#e2b4e2] 
        '>
      
        <div className='w-[90%] sm:w-[70%] text-center mx-auto grid mt-[15vh] sm:mt-[20vh] justify-center items-center'>
        <p className='text-[30px] sm:text-[50px] font-semibold text-white'>Hospiron Business </p>
        
        <p className='text-[15px] sm:text-[19px] text-gray-50 mt-5 font-semibold w-[80%] mx-auto sm:w-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, perferendis. Inventore aperiam nihil eum, illum voluptas impedit dolorum vitae perspiciatis fuga quo quia omnis ab! Quae, unde quis delectus quas error provident aliquid sint assumenda molestias, voluptates quidem adipisci suscipit earum commodi numquam accusantium corporis voluptas omnis, nam tempore laboriosam. </p>
       
    </div>
   
    </div>


      </Slider>

   
        <button className='absolute sm:bg-gray-300 top-[50%] left-3 md:left-12 p-2 sm:p-3 border text-[20px] rounded opacity-50 hover:opacity-90 ' onClick={goToPrev}><GrPrevious className=''/></button>
        <button className='absolute sm:bg-gray-300 top-[50%] right-3 sm:right-12 p-2 sm:p-3 border text-[20px] rounded opacity-60 hover:opacity-90 animate-pulse' onClick={goToNext}><GrNext /></button>
     
    </div>
  );
};

export default Carousel;
