import React from 'react'
import './hero.scss'
import {motion} from 'framer-motion'

const Hero = () => {

    const textVariants = {
        initial: {
            x: -500,
            opcity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }

    const sliderVariance= {
        initial: {
            x: 0,
        },
        animate: {
            x: "-420%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            },
        }
    }

  return (
    <div className='hero' >
        <div className='wraper' >
            <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate" >
                <motion.h2 variants={textVariants}>ASHISH BISHNOI</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer and UI designer</motion.h1>
                <motion.div variants={textVariants} className='buttons' >
                    <motion.a href="#Portfolio" variants={textVariants}>See the latest works</motion.a>
                    <motion.a href="#Contact" variants={textVariants}>Contact Me</motion.a>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt='scroll-down' />
            </motion.div>
        </div>
        <motion.div variants={sliderVariance}  initial="initial" animate="animate" className='slidingTextContainer' >
            Software Developer FreeLancer
        </motion.div>
        <div className='imageContainer' >
            <img src='/hero.png' alt='my-pic' /> 
        </div>
    </div>
  )
}

export default Hero;
