import SideBar from "../sideBar/SideBar"
import "./navBar.scss"
import {motion} from "framer-motion"

const NavBar = () => {
  return (
    <div className="navbar" >
      {/* Side Bar */}
      <SideBar />
      <div className="wrapper" >
        <motion.span
          initial={{opacity:0, scale:0.5}} 
          animate={{opacity:1, scale:1}} 
          transition={{duration:0.3}}
         >
          Ashish Bishnoi
        </motion.span>
        <div className="social" >
          <a href="#" ><i className="fa-brands fa-twitter"></i></a>
          <a href="#" ><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" ><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
