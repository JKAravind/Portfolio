import React, { useState } from "react";
import "./Contact.css"
import {motion} from "framer-motion"


export default function Contact(){
    const Colab = ["Want To Collaborate?",
                    "Need Of An Awwstruck Portfolio?",
                    "Learn Data Structures?"]
    
    const[Postion,setPosition] = useState({
        left:0,
        width:0,
        opacity:1
    })
    const Handlemouse = (event)=>{
        const { offsetLeft, offsetWidth } = event.target;
        setPosition({
            left: offsetLeft,
            width: offsetWidth,
            opacity: 1,
        })
    }
    const Handlemouseexit = (prev)=>{
        setPosition((prev)=>({...prev,
            opacity:0,
        }))
    }



    return(
        <div className="Main-Contact">
            <h1>CONTACT<span>.</span></h1>
            <div className="Contact-Container">

                    <div className="Social"
                    onMouseLeave={Handlemouseexit}>
                        <p id="h2">NEED OF AN <span>AWW</span>STRUCK PORTFOLIO <span>?</span></p>
                        <p>WANT TO COLLABORATE <span>?</span></p>
                        <p>LEARN DATA STRUCTURES AND ALGORITHMS <span>!!!</span></p>

                        <div className="Get-I">
                        <h5>GET IN TOUCH</h5>
                        <h5>W <span>/</span> M</h5>
                        <h5>THROUGH</h5>
                        </div>

                       
                        
                        <nav className="Social-Icons">
                            <a href="https://github.com/JKAravind" onMouseEnter={Handlemouse}>GITHUB</a>
                            <a href="https://www.linkedin.com/in/aravind-jk7676/" onMouseEnter={Handlemouse}>LINKEDIN</a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aruvi.suvel@gmail.com" class="email-button" target="_blank" onMouseEnter={Handlemouse}> MAIL</a>
                            <a href="" onMouseEnter={Handlemouse}>INSTA</a>
                            <a href="https://leetcode.com/u/AravindJK/" onMouseEnter={Handlemouse}>LEETCODE</a>

                            <motion.div className="Orange-Hover"
                                animate={Postion}>
                            </motion.div>

                        </nav>

                        

                    </div>
            </div>
        </div>
    )
}