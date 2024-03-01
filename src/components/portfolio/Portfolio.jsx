import React, { useRef } from 'react'
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id: 1,
        title: "Project 1",
        imgURL: "https://images.unsplash.com/photo-1708876954270-8fad10609e53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"
    },
    {
        id: 2,
        title: "Project 2",
        imgURL: "https://images.unsplash.com/photo-1708876954270-8fad10609e53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"
    },
    {
        id: 3,
        title: "Project 3",
        imgURL: "https://images.unsplash.com/photo-1708876954270-8fad10609e53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"
    },
    {
        id: 4,
        title: "Project 4",
        imgURL: "https://images.unsplash.com/photo-1708876954270-8fad10609e53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"
    },
]

const Single = ({item})=>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref})
    const y = useTransform(scrollYProgress,[0,1], [-300,300])


    return (
        <section>
            <div className='container' >
                <div className='wrapper' >
                    <div className='imageContainer'  ref={ref}   >
                        <img src={item.imgURL} />
                    </div>
                    <motion.div className='textContainer' style={{ y }} >
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })

  return (
    <div className='portfolio' ref={ref} >
    <div className='progress' >
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className='progressBar' ></motion.div>
    </div>
      {items.map((item)=>(
        <Single key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Portfolio
