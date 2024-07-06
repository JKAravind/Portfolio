import './About.css'
import { useState } from 'react';  
import React from 'react';
import { motion ,useInView} from 'framer-motion';
import useMousePosition from '../../components/useMousePosition';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef();
  const isInView = useInView(ref,"-200px")


  const variants = {
    initial:{
      x:-500,
      y:100,
      opacity:0,
    },

    animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
        duration: 1,
        staggerChildren:0.1,
      }
    }
  }

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className='About-main'>
      

      <motion.div 
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)-10}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
        
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            Also A <span>DSA Enthusiast</span> with strong focus on Producing High Quality & Impactful Digital Experiences Through My Works
          </p>
      </motion.div>

      <motion.div className="body"
      variants={variants} 
      initial="initial"
      animate={isInView&&"animate"}
      ref={ref}>

        <div className="item1">         <h1>ABOUT.</h1>
        </div>
        
        
        <div className="item2">   
               <p><span>A</span> 20 Year Old<span> Frontend Developer</span> Who Has A thrive of Learning New Technologies & Enjoy Building Intuitive User Interfaces.</p>
        </div>
        
          
      </motion.div>

    </div>
  )
}