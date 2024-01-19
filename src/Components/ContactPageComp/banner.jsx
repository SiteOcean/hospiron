import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import {ImOffice} from 'react-icons/im';
const AddressSection = () => {


  return (
   
      <div className="sm:max-w-5xl mx-auto p-6 sm:px-6 lg:px-8">
        <div className="min-h-[30vh] hover:text-[#d366f5] mb-3 uppercase flex justify-center items-center bg-gradient-to-r from-pink-100  to-[#f0d4f8] text-center text-[#a33cc2] font-bold text-[50px]">
      Contact
  </div>
      <div className="flex flex-col pl-1 space-y-1 sm:space-y-3 mb-2 text-gray-600">
              <div>
              <h3 className="text-xl font-bold mb-2 ">Company</h3>
              <p className="text-gray-700 font-serif lg:w-[50%]">Hospiron</p>
              </div> 
              <div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-700 font-serif lg:w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, inventore.</p>
            </div> 
            
            <div>
              <h3 className="text-xl font-bold mb-2 space-y-2">Email</h3>
              <p className=" underline text-[blue]">Test@mail.com</p>
              <button className='bg-[#a33cc2] mt-3 rounded-md p-1 px-2 text-white font-semibold'>Get In Touch</button>
   
              </div>   
            </div>
      </div>

  )
}

export default AddressSection
