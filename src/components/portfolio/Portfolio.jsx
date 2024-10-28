import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
    {
        id: 1,
        title: "React",
        video: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video URL
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea ipsam ipsum molestiae similique assumenda facilis non quod eveniet autem quo nihil qui, dolor quia beatae quasi aliquid ipsa expedita!",
    },
    {
        id: 2,
        title: "React",
        video: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video URL
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea ipsam ipsum molestiae similique assumenda facilis non quod eveniet autem quo nihil qui, dolor quia beatae quasi aliquid ipsa expedita!",
    },
    {
        id: 3,
        title: "React",
        video: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video URL
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea ipsam ipsum molestiae similique assumenda facilis non quod eveniet autem quo nihil qui, dolor quia beatae quasi aliquid ipsa expedita!",
    },
    {
        id: 4,
        title: "React",
        video: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your video URL
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea ipsam ipsum molestiae similique assumenda facilis non quod eveniet autem quo nihil qui, dolor quia beatae quasi aliquid ipsa expedita!",
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
                        <button>See Demo</button>
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
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Portfolio;