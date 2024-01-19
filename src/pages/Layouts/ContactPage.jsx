import ContactBanner from "@/Components/ContactPageComp/banner"
import Footer from "@/Components/Footer"

const { default: NavBar } = require("@/Components/NavBar")


const ContactPage=()=>{


    return (<div className="bg-white sm:min-h-[100vh] ">
        <NavBar/>

            <ContactBanner/>
     
        <Footer/>
        
    </div>)
}
export default ContactPage