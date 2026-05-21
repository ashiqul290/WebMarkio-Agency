import About from "./_Home/About";
import Banner from "./_Home/Banner";
import CanectAgency from "./_Home/CanectAgency";
import ChooseUs from "./_Home/ChooseUs";
import Contact from "./_Home/Contact";
import FAQ from "./_Home/FAQ";
import Porfolio from "./_Home/Porfolio";
import Proccess from "./_Home/Proccess";
import Service from "./_Home/Service";
import Testimonials from "./_Home/Testimonials";


export default function Home() {
  return (
 
    <>

    <main>

    <Banner />
    <CanectAgency />
    <Service/>
    <About />
    <Porfolio/>
    <Proccess/>
    <ChooseUs/>
    <Testimonials/>
    {/* <FAQ/> */}
    {/* <Contact/> */}

    </main>
    </>
   
  );
}
