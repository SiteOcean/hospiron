import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {

  const router = useRouter()
  return (
    <footer className="bg-white w-full text-gray-600 py-3 border-t sm:py-5">
   
       
          <div className=" text-left pl-12 w-[60%]">
            <h2 className=" text-lg font-bold leading-tight mb-2">Hospiron</h2>
            <p className=" text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat in deserunt magnam possimus mollitia praesentium at eum ducimus qui ut.</p>
          
          </div>
         
         
        
       
    
    </footer>
  )
}

export default Footer
