import React from 'react'
import Image from 'next/image'

import Img1 from '../../../public/one.jpg'
import Img2 from '../../../public/two.jpg'
import Img3 from '../../../public/three.jpg'

const FlexSection = () => {
  return (
    <>
    <h1 className='mt-12 text-center font-bold text-[30px] text-[#a33cc2]'>Flex Section</h1>
   <div className=' md:pb-12 space-y-12'>
    
     <div className="flex flex-col-reverse sm:flex-row justify-center">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-gray-600 font-serif sm:w-[70%] mx-auto mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor, itaque tenetur aspernatur ea tempora deserunt veniam nesciunt ipsam totam similique impedit possimus numquam quaerat autem ab magnam suscipit eveniet inventore. In nesciunt reiciendis architecto perspiciatis nisi assumenda corrupti, est unde odio optio. A voluptatem possimus rerum officiis alias exercitationem.</p>
       
      </div>

      <div data-aos="flip-right" className="w-full lg:w-1/2 px-4 py-4"
      >
      <Image src={Img1} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row-reverse justify-center">

 

      
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-gray-600 font-serif sm:w-[70%] mx-auto mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor, itaque tenetur aspernatur ea tempora deserunt veniam nesciunt ipsam totam similique impedit possimus numquam quaerat autem ab magnam suscipit eveniet inventore. In nesciunt reiciendis architecto perspiciatis nisi assumenda corrupti, est unde odio optio. A voluptatem possimus rerum officiis alias exercitationem.</p>
      
      </div>

      <div  data-aos="flip-left" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img2} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>

    <div className="flex flex-col-reverse sm:flex-row justify-center ">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col justify-center align-middle">
        {/* <h1 className="text-3xl font-bold mb-2">Section Title</h1> */}
        <p className="text-gray-600 font-serif sm:w-[70%] mx-auto  mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor, itaque tenetur aspernatur ea tempora deserunt veniam nesciunt ipsam totam similique impedit possimus numquam quaerat autem ab magnam suscipit eveniet inventore. In nesciunt reiciendis architecto perspiciatis nisi assumenda corrupti, est unde odio optio. A voluptatem possimus rerum officiis alias exercitationem.</p>

      </div>

      <div  data-aos="flip-right" className="w-full lg:w-1/2 px-4 py-4">
      <Image src={Img3} width={300} height={120} alt='img' priority className='w-full sm:w-[80%] mx-auto my-auto h-[360px] rounded-lg'/>
      </div>
      
    </div>
   </div></>
  )
}

export default FlexSection
