import { motion } from 'framer-motion';
import './contact.scss';
// import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Lets work together</motion.h1>
            <motion.div variants={variants} className="item">
                <h2>Mail</h2>
                <span>hrushikesh2004.k@gmail.com</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Address</h2>
                <span>Vijayawada, Andhra Pradesh</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Phone</h2>
                <span>+917702072637</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className="phoneSvg" initial={{opacity: 1}} whileInView={{opacity: 0}} transition={{delay: 2, duration: 1}}>
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none"><motion.path d="M14.87 32a17.67 17.67 0 0 1 0-25" initial={{pathLength: 0}} whileInView={{pathLength: 1}} transition={{duration: 2}}/><motion.path d="M20 26.87a10.41 10.41 0 0 1 0-14.71" initial={{pathLength: 0}} whileInView={{pathLength: 1}} transition={{duration: 2}}/><motion.path d="m28 30-5.43 5.43a8.77 8.77 0 0 0-2.57 6.2V52" initial={{pathLength: 0}} whileInView={{pathLength: 1}} transition={{duration: 2}}/><motion.path d="M40 56h9a3 3 0 0 0 3-3V19a3 3 0 0 0-3-3H31a3 3 0 0 0-3 3v19.33a2 2 0 0 0 3.42 1.42l4.46-4.45a3.23 3.23 0 0 1 4.41-.24 3.12 3.12 0 0 1 .12 4.53l-3.29 3.29a9.83 9.83 0 0 0-2.88 7 6.25 6.25 0 0 1-6.24 6.2" initial={{pathLength: 0}} whileInView={{pathLength: 1}} transition={{duration: 2}}/><line x1="39" y1="52" x2="41" y2="52"/><line x1="36" y1="20" x2="44" y2="20"/></svg>
            </motion.div>
            <motion.form initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 3, duration: 1}}>
                <input type="text" placeholder='Name' required/>
                <input type="email" placeholder='Email' required/>
                <textarea rows={8} placeholder='Message'/>
                <button>Submit</button>
            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact;