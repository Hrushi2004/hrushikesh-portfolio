import './services.scss';
import {motion, useInView} from 'framer-motion';
import { useRef } from 'react'; // Missing import
import { FaUnity, FaReact } from 'react-icons/fa'; // Unity and React logos
import { SiGodotengine, SiUnrealengine, SiSpringboot, SiFigma } from 'react-icons/si';
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

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { rootMargin: "-100px" }); // Correct usage of rootMargin

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src={people} alt="people" /> */}
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>My Skills...!</motion.b> 
          </h1>
        </div>
      </motion.div>
<motion.div className="listContainer" variants={variants}>
  <motion.div className="box">
    <h2>Game Engines</h2>
    <br></br>
    <p>
      I’m proficient in <b style={{ color: 'orange' }}>Unity</b> and <b style={{ color: 'orange' }}>Godot</b>, crafting engaging 2D and 3D games with smooth mechanics and immersive design. Additionally, I have a foundational grasp of <b style={{ color: 'orange' }}>Unreal Engine</b>, with very few basics.
    </p>
    <br></br>
    <div className="tools">
      <h3>Tools:</h3>
      <div className="icons" style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        <FaUnity size={30} color="orange" />
        <SiGodotengine size={30} color="orange" />
        <SiUnrealengine size={30} color="orange" />
      </div>
    </div>
  </motion.div>
  <motion.div className="box">
    <h2>UI/UX Design Tools</h2>
    <br></br>
    <p>
      I am passionate about creating attractive and impactful designs that enhance user experience. With a solid knowledge of <b style={{ color: 'orange' }}>Figma</b>, I enjoy translating ideas into visually appealing interfaces, focusing on functionality.
    </p>
    <br></br>
    <div className="tools">
      <h3>Tools:</h3>
      <div className="icons" style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        <SiFigma size={30} color="orange" />
      </div>
    </div>
  </motion.div>
  <motion.div className="box">
    <h2>Web Development</h2>
    <br></br>
    <p>
      I am knowledgeable in frameworks like <b style={{ color: 'orange' }}>Spring Boot</b> for backend development and <b style={{ color: 'orange' }}>React</b> for front-end development. This enables me to create full-stack web applications that are both dynamic and user-friendly.
    </p>
    <br></br>
    <div className="tools">
      <h3>Tools:</h3>
      <div className="icons" style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        <SiSpringboot size={30} color="orange" />
        <FaReact size={30} color="orange" />
      </div>
    </div>
  </motion.div>
</motion.div>

    </motion.div>
  );
};

export default Services;