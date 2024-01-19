import React from 'react'
import Image from 'next/image'

import Img1 from '../../../public/one.jpg'
import Img2 from '../../../public/two.jpg'
import Img3 from '../../../public/three.jpg'

const FlexSection = () => {
  return (
    <>
    
    <h1 className='mt-[100px] mb-3 text-center font-bold text-[30px] text-[#a33cc2]'>Advancing Healthcare Technologies for Better Patient Care</h1>
   <div className=' md:pb-12 space-y-12'>
    
     <div className="flex flex-col-reverse sm:flex-row justify-center">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        <p className="text-stone-500 font-serif sm:w-[70%] mx-auto mb-4">
        <span className="font-bold block mb-2 text-[#9036ac]">Cutting-Edge Imaging Excellence: Redefining Diagnostic Precision</span>

          Introducing our state-of-the-art medical imaging system, designed to elevate diagnostic precision and patient care. With cutting-edge technology and user-friendly interfaces, healthcare professionals can now experience seamless workflows and unparalleled accuracy. Revolutionize your medical practice with our advanced equipment, ensuring every diagnosis is swift, precise, and contributes to a brighter and healthier future for all.</p>
       
      </div>

      <div data-aos="zoom-in-up" className="w-full lg:w-1/2 px-4 py-4"
      >
      <Image src={Img1} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row-reverse justify-center">

 

      
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
       
        <p className="text-stone-500 font-serif  sm:w-[70%] mx-auto mb-4">
        <span className="font-bold block mb-2 text-[#9036ac]">Vital Signs Revolution: Seamless Patient Monitoring Solutions</span>
          Unveiling our latest patient monitoring solution, a pinnacle of innovation in healthcare. This advanced system seamlessly integrates real-time data, enabling healthcare providers to monitor vital signs with unparalleled accuracy. With user-friendly interfaces and customizable alerts, our medical equipment ensures comprehensive care, allowing professionals to respond swiftly to changing patient conditions. Elevate your healthcare facility to new heights with our reliable and cutting-edge monitoring technology.</p>
      
      </div>

      <div  data-aos="zoom-in-up" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img2} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row justify-center ">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
       
        <p className="text-stone-500 font-serif sm:w-[70%] mx-auto  mb-4">
        <span className="font-bold block mb-2 text-[#9036ac]">Surgical Precision Redefined: The Future of Robotic-Assisted Procedures</span>
          Introducing our robotic-assisted surgical platform, a breakthrough in precision and efficiency. Designed to enhance the capabilities of skilled surgeons, this state-of-the-art system provides unmatched control and visualization during procedures. With intuitive controls and a focus on minimally invasive techniques, our medical equipment aims to redefine surgical standards, reducing patient recovery times and improving overall outcomes. Join the future of surgery and elevate your practice with our innovative robotic technology.</p>

      </div>

      <div  data-aos="zoom-in-up" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img3} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>
   </div></>
  )
}

export default FlexSection
