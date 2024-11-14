import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GoDot from '../../assets/GoDot.mp4';
import Unity from '../../assets/Unity.mp4';
const items = [
    {
        id: 1,
        title: "Eldoria's Last Stand",
        video: Unity, // Replace with your video URL
        desc: "Eldoria's Last Stand is an RPG game kind of game made in Unity. The game has a large map of forest and game is set in a medival period. The game features exploration, combat mechanics, and an immersive storyline",
    },
    {
        id: 2,
        title: "Infinte Runner",
        video: GoDot, // Replace with your video URL
        desc: "This game is creation by mixing and replicating two popular games. Super Mario and Chrome Dino. It combines features of Super marios enemies and health bars and Chrome Dino's Endless running. The game is made in GoDot.",
    }
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="videoContainer" ref={ref}>
                        <video src={item.video} controls muted style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
  
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>What I Did...?</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Portfolio;