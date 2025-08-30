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
       I am a Computer Science Engineering student at KL University with a specialization in Game Development and UX Design. My primary focus has been on crafting intuitive, user-centric digital experiences, supported by a strong foundation in design thinking and usability principles. I have hands-on experience with design tools such as Figma and Adobe Illustrator, where I translate ideas into wireframes, prototypes, and high-fidelity interfaces.
          </p>
            <p>
One of my key projects was a UX case study on the Zudio brand, where I researched the brand identity and designed a conceptual mobile application with an intuitive and visually engaging interface. I also designed a quiz game interface for C programming learners, developing a demo that highlighted clear interaction flows and engaging visual design. Additionally, I contributed to the website redesign for my college club, enhancing the overall user experience by improving navigation, consistency, and responsiveness.
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
