import React, { useState } from "react";
import './Navbar.css';
import { motion } from "framer-motion"


export default function Navbar(){
    const [postion , setposition] = useState({
        left :0,
        width:0,
        opacity:1,
    });

    const Handlemouse = (event)=>{
        const { offsetLeft, offsetWidth } = event.target;
        setposition({
            left: offsetLeft,
            width: offsetWidth,
            opacity: 1,
        })
    }
    const Handlemouseexit = (prev)=>{
        setposition((prev)=>({...prev,
            opacity:0,
        }))
    }
    return(
        <div className="main">
            <nav className="navbar"
            onMouseLeave={Handlemouseexit}>
                <a onMouseEnter={Handlemouse}>Home</a>
                <a onMouseEnter={Handlemouse}>Skills</a>
                <a onMouseEnter={Handlemouse}>Projects</a>
                <a onMouseEnter={Handlemouse}>Contact</a>

                <motion.div
                    animate={postion}
                    className="hover"
                />
            </nav>
            
 
        </div>
    )
};

