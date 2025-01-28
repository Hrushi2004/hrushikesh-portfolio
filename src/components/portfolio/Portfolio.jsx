import './portfolio.scss';
import { useState } from 'react';
import GoDot from '../../assets/Chome Dino.mp4';
import Zudio from '../../assets/Zudio.png';
import Mayavi from '../../assets/Mayavi.png';
import GameDesign from '../../assets/GameDesign.mp4';
import Unity from '../../assets/unity.mp4';
import {motion} from 'framer-motion';
import { FaGithub, FaItchIo } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

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

const gameDevProjects = [
  
  {
    id: 1,
    title: "1. Chrome Dino: Evolution",
    video: GoDot,
    desc: "A modern take on the classic Chrome Dino game, where I expanded its mechanics and visuals. Crafted using the powerful and open-source Godot Engine, delivering smooth and engaging gameplay.",
      
    itch: "https://hrushi2004.itch.io/chrome-dino", // Replace with your Itch.io link
  },
  {
    id: 2,
    title: "2. Eldoria's Last Stand",
    video: Unity,
    desc: "Eldoria's Last Stand is an RPG game made in Unity. The game features exploration, combat mechanics, and an immersive storyline set in a medieval forest.",
    github: "https://github.com/Hrushi2004/eldorias-last-stand",  // Replace with your GitHub link
     // Replace with your Itch.io link
  },
];

const uxProjects = [
  {
    id: 1,
    title: "1. Zudio",
    img: Zudio, // Replace with your UX project video
    desc: "I designed a user-friendly mobile application for Zudio, focusing on intuitive navigation and a visually cohesive interface. Using Figma, I created wireframes, interactive prototypes, and high-fidelity designs to ensure a seamless user experience. The design emphasized easy product browsing, smooth transitions, and an accessible checkout process.",
    figma: "https://www.figma.com/proto/6MWWyGUs8o6tjINWGmrr87/Zudio?node-id=0-1&t=IrsOnidLynYIdX0o-1",  // Replace with your Figma link
  },
  {
    id: 2,
    title: "2. Mayavi Website",
    img: Mayavi, // Replace with your UX project video
    desc: "A modern and responsive website for Mayavi our college club, aimed at showcasing technology projects and blogs. I helped design and implement the layout using Tailwind CSS for styling and Headless CMS for real-time content management.",
    figma: "https://www.figma.com/proto/p5JihvYzb1aqu1jM5TMe9Q/Mayavi?t=IrsOnidLynYIdX0o-1&node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width&content-scaling=fixed",  // Replace with your Figma link
  },
  {
    id: 3,
    title: "3. Game Design for Quiz Game",
    vd: GameDesign, // Replace with your UX project video
    desc: "A quiz game designed to teach C programming concepts through interactive questions. I used Figma to create the user interface and developed a demo video showcasing the game's features.",
    figma: "https://www.figma.com/proto/G75gIjQYAOD5ICz8GiMr5w/C_GameProject?t=IrsOnidLynYIdX0o-1",  // Replace with your Figma link
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('UX Projects');
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = selectedCategory === 'UX Projects' ? uxProjects : gameDevProjects;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="portfolio">
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>My Projects...!</motion.b> 
          </h1>
        </div>
      </motion.div>
      
      {/* Top Category Selector */}
      <div className="categorySelector">
        <button
          className={selectedCategory === 'UX Projects' ? 'active' : ''}
          onClick={() => {
            setSelectedCategory('UX Projects');
            setCurrentIndex(0);
          }}
        >
          UX Projects
        </button>
        <button
          className={selectedCategory === 'Game Dev Projects' ? 'active' : ''}
          onClick={() => {
            setSelectedCategory('Game Dev Projects');
            setCurrentIndex(0);
          }}
        >
          Game Dev Projects
        </button>
      </div>

      {/* Center Content */}
      <div className="contentWrapper">
        {/* Previous Button */}
        <button className="prevButton" onClick={handlePrev}>
          &lt;
        </button>

        {/* Video and Text */}
        <div className="projectDisplay">
          <div className="videoContainer">
          {
  currentProject.video ? (
    <video src={currentProject.video} controls muted />
  ) : currentProject.vd ? (
    <video className="vd" src={currentProject.vd} controls muted />
  ) : (
    <img src={currentProject.img} alt={currentProject.title} />
  )
}

          </div>
          <div className="textContainer">
            <h2>{currentProject.title}</h2>
            <p>{currentProject.desc}</p>
            <div className="projectLinks">
                <p>Check It Out</p>
              {currentProject.github && (
                <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} color="orange" />
                </a>
              )}
              {currentProject.itch && (
                <a href={currentProject.itch} target="_blank" rel="noopener noreferrer">
                  <FaItchIo size={30} color="orange" />
                </a>
              )}
              {currentProject.figma && (
                <a href={currentProject.figma} target="_blank" rel="noopener noreferrer">
                  <SiFigma size={30} color="orange" />
                </a>
              )}
             
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button className="nextButton" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
