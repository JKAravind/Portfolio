import React, { useRef, useState } from "react";
import './Projects.css'
import { motion,useScroll } from "framer-motion";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Projectslist = [
    {
        num:"01",
        title:"Workout Tracker",
        img:'https://img.freepik.com/premium-vector/cute-man-lifting-dumbbell-fitness-gym-cartoon-vector-icon-illustration-people-sport-icon-isolated_138676-5450.jpg?w=1480',
        gitLink:"https://github.com/JKAravind/Workout-Tracker",
        desc:"A dynamic and intuitive workout tracking application built using React Native and a GraphQL API. This app allows users to log their workouts, track progress, and view detailed statistics",
    },
    
    {
        num:2,
        title:"BMR Calculator",
        gitLink:"https://github.com/JKAravind/bmi_cal",
        img:'https://img.freepik.com/premium-vector/cute-man-lifting-dumbbell-fitness-gym-cartoon-vector-icon-illustration-people-sport-icon-isolated_138676-5450.jpg?w=1480',
        desc: " Designed with React, my BMR (Basal Metabolic Rate) calculator offers a straightforward way to estimate daily calorie needs. By inputting basic details such as age, gender, weight, and height, users can quickly determine their BMR—the calories their body needs at rest. ",
    }
]



export default function Projects(){
    const[Project,setProject] = useState(Projectslist[0])
    const openNewTab = (url)=>{
        window.open(url)
    }

    return(
        <div className="Projects-main">
            <div className="Project-header">
                    <h1>PROJECTS<span>.</span></h1>
            </div>

            
                

            <motion.div className="flex-projects">
                <div className="slider">
                                    <Swiper
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        onSlideChange={(swiper) => {
                                            const currIndex = swiper.activeIndex
                                            setProject(Projectslist[currIndex])
                                        }}
                                        onSwiper={(swiper) => console.log(swiper)}>
                                            {Projectslist.map((Project)=>{
                                                return(
                                                    <SwiperSlide><h3><span>SWIPE</span></h3></SwiperSlide>
                                                )
                                            })}
                            
                                    </Swiper>
                </div>

                <h1><span>{Project.num}</span>
                </h1>
                <h2>{Project.title}</h2>
                <p>{Project.desc}</p>
                <FontAwesomeIcon onClick={()=>openNewTab(Project.gitLink)} icon={faGithub} spin size="2xl" style={{color: "#ff230a",}} />

            </motion.div>
            </div>
        
    )
}