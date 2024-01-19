import Footer from "@/Components/Footer"
import Banner from "@/Components/AboutPageComp/Banner"
import GridImageSection from "@/Components/HomePageComp/gridImageSection"

const { default: NavBar } = require("@/Components/NavBar")


const AboutPage=()=>{


    return (<div>
        <NavBar/>

            <Banner/>
            <GridImageSection/>

        <Footer/>
    </div>)
}
export default AboutPage