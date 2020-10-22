import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Content from './Content';
import './index.css'



function Homepage() {
    return (
        <div>
          <Navbar/> 
          <Content/>
        </div>
    );
}

export default Homepage;
