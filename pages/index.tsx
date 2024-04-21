import React, { useEffect, useState } from 'react';
import Nav from '@/Components/Nav';
import MobileNav from '@/Components/MobileNav';
import Hero from '@/Components/Hero'
import Services from '@/Components/Services'
import About from '@/Components/About';
import Skills from '@/Components/Skills'
import Projects from '@/Components/Projects'
import Testimonials from '@/Components/Testimonials';
import Blog from '@/Components/Blog';
import Footer from '@/Components/Footer';
import AOS from 'aos';
import { Element } from 'react-scroll';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const HomePage = () => {

  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(()=> {
// You can also pass an optional settings object
// below listed default settings
  AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
  },[])
  return (
  <div className = "overflow-x-hidden">
    <div>
      {/* {Navbar} */}
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav}/>

     <Element name = 'home' id ='home'>
      <Hero/>
      </Element>
      <div className="relative z-[30]"></div>
    
    {/* <Element name = 'about' id ='about'>
    <About/>
    </Element> */}
    <Element name = 'services' id ='services'>
    <Services/>
    </Element>
 
    <Skills/>

    <Element name = 'projects' id ='projects'>
    <Projects/>
    </Element>
    {/* <Element name = 'testimonials' id ='testimonials'>
    <Testimonials/>
    </Element> */}
    {/* <Element name = 'blog' id ='blog'>
    <Blog/>
    </Element> */}
    <Element name = 'contact us' id ='contact us'>
    <Footer/>
    </Element>
    </div>
  </div>
  );
};
export default HomePage;