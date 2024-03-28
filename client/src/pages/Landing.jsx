import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import Main from '../components/Landing/Main';
import Slider from '../components/Landing/Slider';
import Section from '../components/Landing/Section';
import Footer from '../components/Footer';

function Landing() {
  return(
    <div className='landing'>
        <Navbar />
        <Main />
        <Slider/>
        <Section/>
        <Footer/>
    </div>
);
}

export default Landing