import { useRouter } from 'next/router'
import React from 'react'
import Logo from '../../public/logo.jpg'
import Image from 'next/image';
const Footer = () => {

  const router = useRouter()
  return (
    <footer className="bg-white w-full text-gray-600 py-4 border-t sm:py-12">
   
       
          <div className=" text-left pl-6 sm:pl-12 w-[82%] sm:w-[60%]">
         <div className='flex items-center mb-2'> <Image src={Logo} alt='logo' width={40} height={40}
                className=''/>
            <h2 className=" text-lg font-bold leading-tight text-[#44dbae] tracking-widest">Hospiron</h2>
           </div>
          <p className=" text-sm pl-3">We forge ahead with unwavering determination, sculpting the future of healthcare through innovation. Join us in pioneering excellence and shaping a healthier world with every breakthrough.</p>
          
          </div>
         
         
        
       
    
    </footer>
  )
}

export default Footer
