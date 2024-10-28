import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import {useRef} from 'react'
const items = [
    {
        id: 1,
        title: "React",
        img: "https://imgs.search.brave.com/3Pj-_t5Eb1iyVeiAj24vkcuCh7jz_keUfPgeSNLJnVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vZG9v/Y2RuLmNvbS9vcGVu/ZXJwX3dlYnNpdGUv/c3RhdGljL3NyYy9p/bWcvYXBwcy93ZWJz/aXRlL2hlcm9faW1h/Z2Uud2VicA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea ipsam ipsum molestiae similique assumenda facilis non quod eveniet autem quo nihil qui, dolor quia beatae quasi aliquid ipsa expedita!",
    },
    {
        id: 2,
        title: "React",
        img: "https://imgs.search.brave.com/3Pj-_t5Eb1iyVeiAj24vkcuCh7jz_keUfPgeSNLJnVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vZG9v/Y2RuLmNvbS9vcGVu/ZXJwX3dlYnNpdGUv/c3RhdGljL3NyYy9p/bWcvYXBwcy93ZWJz/aXRlL2hlcm9faW1h/Z2Uud2VicA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea ipsam ipsum molestiae similique assumenda facilis non quod eveniet autem quo nihil qui, dolor quia beatae quasi aliquid ipsa expedita!",
    },
    {
        id: 3,
        title: "React",
        img: "https://imgs.search.brave.com/3Pj-_t5Eb1iyVeiAj24vkcuCh7jz_keUfPgeSNLJnVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vZG9v/Y2RuLmNvbS9vcGVu/ZXJwX3dlYnNpdGUv/c3RhdGljL3NyYy9p/bWcvYXBwcy93ZWJz/aXRlL2hlcm9faW1h/Z2Uud2VicA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea ipsam ipsum molestiae similique assumenda facilis non quod eveniet autem quo nihil qui, dolor quia beatae quasi aliquid ipsa expedita!",
    },
    {
        id: 4,
        title: "React",
        img: "https://imgs.search.brave.com/3Pj-_t5Eb1iyVeiAj24vkcuCh7jz_keUfPgeSNLJnVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vZG9v/Y2RuLmNvbS9vcGVu/ZXJwX3dlYnNpdGUv/c3RhdGljL3NyYy9p/bWcvYXBwcy93ZWJz/aXRlL2hlcm9faW1h/Z2Uud2VicA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea ipsam ipsum molestiae similique assumenda facilis non quod eveniet autem quo nihil qui, dolor quia beatae quasi aliquid ipsa expedita!",
    }
]

const Single = ({item}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref});
    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                <div className="imageContainer"  ref={ref}>
                    <img src={item.img} alt="project" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio;