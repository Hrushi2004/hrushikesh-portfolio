import { motion } from 'framer-motion';
import './hero.scss';
import hero from '../../assets/hero.png';
import scroll from '../../assets/scroll.png';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1,
            repeat: Infinity,
        }
    }
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

const Hero = () => {
    return (
        <div className='hero'>
            <div className='wrapper'>
                <motion.div className='textContainer' variants={textVariants} initial='initial' animate='animate'>
                    <motion.h1 variants={textVariants}>Hrushikesh Kantamaneni</motion.h1>
                    <motion.h2 variants={textVariants}>UX <b style={{ color: 'orange' }}>Designer <br/> Game</b> Developer</motion.h2>
                    <motion.div variants={textVariants} className='buttons'>
                        <motion.a href="#Projects" variants={textVariants}>See the Latest Works</motion.a>
                        <motion.a href="#Contact" variants={textVariants}>Contact Me</motion.a>
                    </motion.div>
                    <motion.img
                        src={scroll}
                        alt='scroll'
                        variants={textVariants}
                        animate='scrollButton'
                    />
                </motion.div>
            </div>
           
            <div className='imageContainer'>
                <img src={hero} alt='hero' />
            </div>
        </div>
    );
};

export default Hero;