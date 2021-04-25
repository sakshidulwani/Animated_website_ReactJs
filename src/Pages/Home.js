import React from 'react';
import web from "../images/img1.png";
import Common from '../components/Common';
 


function Home() {
  return (
    < >
   <Common name="Grow your business with" imgsrc={web} visit="/service" 
     btname="Get Started"/>
    </>
  );
}

export default Home;