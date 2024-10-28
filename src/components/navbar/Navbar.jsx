import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from 'framer-motion'
import facebook from '../../assets/facebook.png';
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import dribbble from "../../assets/dribbble.png";


const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar />
        
        <div className="wrapper">
            <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}}>Hrushikesh Kantamaneni</motion.span>
            <div className="social">
                <a href=""><img src={facebook} alt="" /></a>
                <a href=""><img src={instagram} alt="" /></a>
                <a href=""><img src={youtube} alt="" /></a>
                <a href=""><img src={dribbble} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar