import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import Main from '../components/Home/Main';
import Slider from '../components/Home/Slider';
import Section from '../components/Home/Section';
import Footer from '../components/Footer';

function Landing() {
  return(
    <div className='home'>
        <Navbar />
        <Main />
        <Slider/>
        <Section/>
        <Footer/>
    </div>
);
}

export default Landing