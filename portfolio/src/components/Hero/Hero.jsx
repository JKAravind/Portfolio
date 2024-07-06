import React, { useEffect, useState } from "react";
import './Hero.css'
import { motion } from "framer-motion"
import useMousePosition from "../useMousePosition";
import Typewriter from 'typewriter-effect';

export default function Hero(){
    
    const {x,y} = useMousePosition();
    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? 300:40 
    const welcome = ["வணக்கம்","Hello","Ciao","स्वागत है","స్వాగతం "]

  
    
  

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


    return(
        <div className="Hero">

                <motion.div 
                variants={variants}
                initial="initial"
                animate="animate" className="Name-container"
                >
                    <h1 >JK</h1>
                    <h1><span>ARA</span>VIND.</h1>
                    <span>  
                        <h3>FRONTEND DEVELOPER</h3>
                        <h3>DSA ENTHUSIAST</h3>
                    </span>
                </motion.div>

                <motion.div 
                initial = {{ x:-100, opacity:0 }}
                animate = {{ x:0, opacity:1 }}
                transition = {{ duration:0.5, delay:0.6 }}
                className="type-writer"
                >
                  <Typewriter
                  options={{
                    strings:welcome,
                    autoStart:true,
                    loop:true
                  }}
                  />
                  </motion.div>




                <motion.div className="Name-container-Mask"

                animate={{
                  WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)-75}px`,
                  WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration:0.5}}>

                  <div className="Name-item"
                  onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
                    <h1>JK</h1>
                          <h1><span>ARA</span>VIND.</h1>
                          <span>  
                              <h3>LIFESTYLE ENTHUSIAST</h3>
                              <h3>OPEN SOURCE</h3>
                      </span>
                  </div>
                </motion.div>
                

                
        </div>
    )
}