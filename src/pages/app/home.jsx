import Carousel from "@/Components/HomePageComp/Carousel"
import FlexSection from "@/Components/HomePageComp/FlexComp"
import FlexPageCards from "@/Components/HomePageComp/FlexPageCards"
import GridImageSection from "@/Components/HomePageComp/gridImageSection"

const { default: NavBar } = require("@/Components/NavBar")
const { default: Footer } = require("@/Components/Footer")
import { RiWhatsappFill } from "react-icons/ri";
const HomePage=()=>{

    const redirectToWhatsApp = () => {
        // Replace '123456789' with the actual phone number you want to contact
        const phoneNumber = '+917026090660';
        
        // Construct the WhatsApp URL
        const whatsappURL = `https://wa.me/${phoneNumber}`;
      
        // Redirect to WhatsApp
        window.location.href = whatsappURL;
      };

    return (<div className="w-[100%] relative bg-white">
    <NavBar/>

         <Carousel/>
        <div className="w-full md:w-[90%] mx-auto">
        <GridImageSection/>
        <FlexSection/>
        <FlexPageCards/>
       
        </div>
    <Footer/>
    <RiWhatsappFill onClick={redirectToWhatsApp} className="text-[50px] hover:text-green-700 duration-300 text-green-600 fixed bottom-[6%]  animate-bounce right-[4%]"/>
    </div>)
}
export default HomePage