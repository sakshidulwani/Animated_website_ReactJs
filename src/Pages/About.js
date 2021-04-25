import React from 'react';
import Common from '../components/Common';
import web from '../images/img2.png'

function About() {
  return (
    <div >
     <Common name="Welcome to About Page" imgsrc={web} visit="/contact" 
     btname="Contact Now"/>
    </div>
  );
}

export default About;