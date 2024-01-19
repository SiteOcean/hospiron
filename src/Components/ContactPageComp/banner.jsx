import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import {ImOffice} from 'react-icons/im';
import LocationImage from '../../../public/locationScreenshot.png'
const AddressSection = () => {

  const handleSendEmail = () => {
    const emailAddress = 'info@example.com';
    const subject = 'Inquiry from your website';
    const body = 'Hello, I have a question...';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className="min-h-[25vh] hover:text-[#44dbae] mb-3 uppercase flex justify-center items-center text-center text-[#44dbae] font-bold text-[50px]">
      Contact
  </div>
      <div className="sm:max-w-5xl mx-auto p-6 sm:px-6 lg:px-8">
       
      <div className="flex flex-col sm:flex-row pl-1 space-y-1 sm:space-y-3 mb-2 text-gray-600">
             <div className='flex-1 mb-7 sm:m-0'>
             <div className='mb-1'>
              <h3 className="text-xl font-bold text-[#44dbae]">Company</h3>
              <p className="text-gray-500 font-serif lg:w-[50%]">Hospiron</p>
              </div> 
              <div className='mb-1'>
              <h3 className="text-xl font-bold text-[#44dbae]">Address</h3>
              <p className="text-gray-500 font-serif lg:w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, inventore.</p>
            </div>
            <div className='mb-1'>
              <h3 className="text-xl font-bold text-[#44dbae]">Mobile</h3>
              <p className="text-gray-500 font-serif lg:w-[50%]">1234567890</p>
            </div> 
            <div className=''>
              <h3 className="text-xl font-bold text-[#44dbae]">Email</h3>
              <p onClick={handleSendEmail} className=" underline text-[#6060fa] cursor-pointer">Test@mail.com</p>
              <button onClick={handleSendEmail} className='bg-[#44dbae] mt-3 rounded-md p-1 px-2 text-white font-semibold'>Get In Touch</button>
   
              </div> 

             </div>
            
           

              <div className='flex-1 flex sm:justify-center items-center'>
                <Image className='rounded-md w-full sm:w-[300px]' src={LocationImage} alt='location' width={300} height={300}/>
                </div>  
            </div>
      </div>
    </div>

  )
}

export default AddressSection
