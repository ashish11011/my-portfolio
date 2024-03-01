import {motion, spring} from "framer-motion"
import React, { useRef, useState } from 'react'

const Test = () => {

    const containerRef = useRef(null);

    const items=[
        "item1","item2","item3","item4"
    ]

    const [open, setOpen] = useState(false);

    const variants = {
        visible: (i)=>({
            opacity:1,
            // x:100,
            transition: {delay:i*0.3}
        }),
        hidden:{
            opacity:0,
        }
    }

    // const variants={
    //     visible: {opacity:1, x:500},
    //     hidden: {opacity:0},
    // }
    return (

        <div className="course" >
            <motion.ul initial="hidden" animate="visible" variants={variants} >
                {items.map((item, i)=>
                    <motion.li variants={variants} custom={i} key={item} >{ item }</motion.li>
                )}
            </motion.ul>
        </div>


        // <motion.div ref={containerRef}  className='course' >


        //     <motion.div 
        //         className='box'
        //         variants={variants}
        //         // initial="hidden"
        //         // animate="visible"

        //         // initial={{opacity:1, scale:0.5}}
        //         // animate={{opacity:1, scale:1}}
        //         // transition={{stiffness:200,damping:10, type:"spring" }} {    /* duration:1, */}
        //         // animate={open ? "visible" : "hidden"}
        //         // whileTap={{opacity:1, scale:0.7}}
        //         // drag
        //         // dragConstraints={containerRef}
        //          >


        //     </motion.div>
        //     <button onClick={()=>setOpen(prev=>!prev)} >click</button>












            /* <motion.div 
                className='box'
                initial={{opacity:1, scale:0.5}}
                // animate={{opacity:1, scale:1}}
                transition={{duration:0.6}}
                // whileTap={{opacity:1, scale:0.7}}
                drag
                dragConstraints={containerRef}
                 >

            </motion.div> */
        // </motion.div>
    )
}

export default Test
