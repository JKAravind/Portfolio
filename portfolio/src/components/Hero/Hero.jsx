import React, { useEffect, useState } from "react";
import './Hero.css'
import { motion } from "framer-motion"

export default function Hero(){
    const [mousePointer,setMousePointer] = useState({
        x:0,
        y:0,
    })
    const[cursorType,setCursorType] = useState("default")

    useEffect(() => {
        const mouseMove=(e)=>{
            setMousePointer({
                x:e.clientX,
                y:e.clientY
            })
        }
        window.addEventListener("mousemove",mouseMove)
        return () => {
            window.removeEventListener("mousemove",mouseMove)
        }
    }, [])
    console.log(mousePointer)
    
    const textEnter = () => setCursorType("text")
    const textLeave = ()=> setCursorType("default")

    const variants = {
        default: {
          x: mousePointer.x - 16,
          y: mousePointer.y - 16,
        },
        text: {
          height: 150,
          width: 150,
          x: mousePointer.x - 75,
          y: mousePointer.y - 75,
          backgroundColor: "white",
          mixBlendMode: "difference",
        },
      };


    return(
        <div className="Hero">

                <div className="Name-container" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    <h1>JK</h1>
                    <h1><span>ARA</span>VIND.</h1>
                    <span>  
                        <h3>FRONTEND DEVELOPER</h3>
                        <h3>DSA ENTHUSIAST</h3>
                    </span>
                </div>

                <motion.div 
                className="cursor"
                variants={variants}
                animate = {cursorType}
                />
        </div>
    )
}