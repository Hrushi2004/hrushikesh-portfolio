import './services.scss';
import {motion, useInView} from 'framer-motion';
import { useRef } from 'react'; // Missing import
import people from '../../assets/people.webp'

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
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={people} alt="people" />
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b> Business
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: 'lightgray', color: 'black' }} // Corrected hover effect
        >
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ipsa libero eius ommodi iure, aspernatur voluptate aut dolorum dolorem inventore? Incidunt harum perspiciatis veniam ad consectetur.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
        >
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ipsa libero eius ommodi iure, aspernatur voluptate aut dolorum dolorem inventore? Incidunt harum perspiciatis veniam ad consectetur.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
        >
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ipsa libero eius ommodi iure, aspernatur voluptate aut dolorum dolorem inventore? Incidunt harum perspiciatis veniam ad consectetur.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
        >
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ipsa libero eius ommodi iure, aspernatur voluptate aut dolorum dolorem inventore? Incidunt harum perspiciatis veniam ad consectetur.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;