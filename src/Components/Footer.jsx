import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {

  const router = useRouter()
  return (
    <footer className="bg-white w-full text-gray-600 py-4 border-t sm:py-12">
   
       
          <div className=" text-left pl-6 sm:pl-12 w-[82%] sm:w-[60%]">
            <h2 className=" text-lg font-bold leading-tight mb-2 text-[#b448d4] tracking-widest">Hospiron</h2>
            <p className=" text-sm ">We forge ahead with unwavering determination, sculpting the future of healthcare through innovation. Join us in pioneering excellence and shaping a healthier world with every breakthrough.</p>
          
          </div>
         
         
        
       
    
    </footer>
  )
}

export default Footer
