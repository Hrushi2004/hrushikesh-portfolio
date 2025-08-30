import React from 'react';
import './aboutme.scss';

import {motion} from 'framer-motion';
import { FaGithub, FaLinkedin, FaItchIo } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import resumePdf from '../../assets/Kantamneni Hrushikesh_Resume.pdf';

const AboutMe = () => {
    const variants = {
        initial: {
          x: -500,
          y: 100,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        },
      };
      const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: '-220%',
            transition: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 20,
            },
        },
    };
     
  return (
    
    <div className="aboutMe">
      <div className="contentWrapper">
        <div className="textContainer">
        <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>About Me...!</motion.b> 
          </h1>
        </div>
      </motion.div>
          <p>
          I am a Computer Science Engineering student at KL University, with a specialization in Game development and UX design. 
          I have had a strong interest in creating immersive environments, and investigating the technical and artistic facets of 
          game creation throughout my academic career. I have extensive experience with Unity, Godot, and Core Engine for game 
          development, blending my skills in programming with a strong understanding of game design principles to create seamless 
          player experiences.
          </p>
          <p>
          I have a strong foundation in UX design, with hands-on experience using tools like Figma to bring creative concepts to life. 
          One of my key projects was designing an application on the Zudio brand, where I focused on creating an intuitive and visually 
          appealing interface that aligns with the brands identity. Additionally, I designed a quiz game for C programming, using Figma
           to develop a demo video that showcased the user interface and gameplay flow. I also contributed to designing the website for 
           my college club, where I helped enhance the user experience by ensuring that the site was easy to navigate, visually cohesive,
            and aligned with modern web design standards.
          </p>
        </div>
       
        <div className="profiles">
          <h2>Check Out My Profiles</h2>
          <div className="icons" style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <a href="https://github.com/Hrushi2004" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} color="orange" />
            </a>
            <a href="https://www.figma.com/@Hrushi2004" target="_blank" rel="noopener noreferrer">
              <SiFigma size={30} color="orange" />
            </a>
            <a href="https://www.linkedin.com/in/Hrushi2004" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} color="orange" />
            </a>
            <a href="https://Hrushi2004.itch.io" target="_blank" rel="noopener noreferrer">
              <FaItchIo size={30} color="orange" />
            </a>
          </div>
          <a href={resumePdf} download>
            <button className="downloadButton">Download My CV</button>
          </a>
        </div>
         <motion.div className='slidingTextContainer' variants={sliderVariants} initial='initial' animate='animate'>
                       UX Designer | Game Developer 
                    </motion.div>
      </div>
    </div>
   
  );
};

export default AboutMe;
