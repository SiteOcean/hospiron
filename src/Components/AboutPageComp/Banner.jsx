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
       <h1 className="font-serif font-bold text-[19px] md:text-[25px] text-[#a33cc2] capitalize underline underline-offset-4">Our Vision:</h1>
       <p className=' font-sans text-[14px] md:text-[16px]'>At hospiron, we envision a healthier world through innovative medical solutions. Our commitment lies in pioneering cutting-edge technologies that redefine the standards of patient care, fostering a future where healthcare is accessible, efficient, and compassionate.</p>
       </div>

      </div>


      <div className="hover:bg-[#f8f5f5] bg-white shadow-lg mx-4 my-4  rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[25px] text-[#a33cc2] capitalize underline underline-offset-4">Mission Statement:</h1>
       
       </div>
        <p className=' font-sans text-[14px] md:text-[16px] '>Driven by the passion to make a meaningful impact, our mission is to empower healthcare professionals with state-of-the-art equipment. We aim to enhance diagnostic accuracy, streamline treatment processes, and contribute to improved patient outcomes, ultimately revolutionizing the landscape of medical care.</p>
       
      </div>


      <div className="hover:bg-[#f8f5f5] bg-white shadow-lg mx-4 my-4  rounded-lg overflow-hidden flex flex-col p-5 space-y-2 ">
       <div className='flex justify-between px-1'>
       <h1 className="font-serif font-bold text-[19px] md:text-[25px] text-[#a33cc2] capitalize underline underline-offset-4">Company Values:</h1>
       
       </div>
        <p className=' font-sans text-[14px] md:text-[16px] '>Integrity, innovation, and inclusivity form the core of our values at [Startup Name]. We believe in transparent and ethical practices, constantly pushing the boundaries of technological advancements to create solutions that address the diverse needs of healthcare providers and their patients.</p>
       
      </div>
     
    </div>
    </div>

    <section className=" bg-gradient-to-r from-pink-100  to-[#f0d4f8] text-center  text-[#a33cc2] py-10 my-[50px]">
      <div className="text-center w-[90%] mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Hospiron?</h2>
        <p className="text-gray-600 text-[15px] sm:text-[18px] mb-8">
          Choose Hospiron as your healthcare partner because we go beyond providing equipment; we are dedicated to transforming the healthcare experience. With a commitment to excellence, innovation, and your patients' well-being, we invite you to join us on this journey towards a healthier and brighter future.
        </p>
      </div>
    </section>


    <section className="bg-white py-10 w-[90%] sm:w-[85%] mx-auto">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#a33cc2]">Our Products</h2>
        <ProductCard
          number={1}
          title="Precision Imaging Solutions"
          description="Explore our advanced digital X-ray systems that deliver crystal-clear images, supporting accurate and efficient diagnostics. At [Startup Name], we prioritize precision to empower healthcare professionals in providing the best possible care."
        />
        <ProductCard
          number={2}
          title="Smart Treatment Support"
          description="Discover the next generation of infusion pumps designed for seamless treatment delivery. Our smart pumps aim to simplify the medical administration process, ensuring healthcare providers can focus on what matters most – the well-being of their patients."
        />
        <ProductCard
          number={3}
          title="Rapid Diagnostics for Timely Care"
          description="Experience the convenience of our rapid diagnostic tools, providing fast and reliable results at the point of care. At [Startup Name], we understand the urgency in healthcare decisions, and our solutions are tailored to meet the need for swift and accurate diagnostics."
        />
      </div>
    </section>

      </div>
    );
  };
  
  export default Banner;
  
  const ProductCard = ({ number, title, description }) => {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2 text-[#a065b3]">{number}. {title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };