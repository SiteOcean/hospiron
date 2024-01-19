import Footer from "@/Components/Footer"
import Banner from "@/Components/AboutPageComp/Banner"
import GridImageSectionAbout from "@/Components/AboutPageComp/gridImageSection"

const { default: NavBar } = require("@/Components/NavBar")


const AboutPage=()=>{


    return (<div>
        <NavBar/>

            <Banner/>
            <GridImageSectionAbout/>

        <Footer/>
    </div>)
}
export default AboutPage