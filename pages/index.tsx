import React, { useState } from 'react';
import Nav from '@/Components/Nav';
import MobileNav from '@/Components/MobileNav';
import Hero from '@/Components/Hero'
import Services from '@/Components/Services'
import About from '@/Components/About';
const HomePage = () => {

  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
  <div className = "overflow-x-hidden">
    <div>
      {/* {Navbar} */}
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav}/>

     
      <Hero/>
      <div className="relative z-[30]"></div>
    <About/>
    <Services/>
    </div>
  </div>
  );
};
export default HomePage;