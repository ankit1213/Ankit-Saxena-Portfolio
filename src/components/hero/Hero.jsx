import React from 'react'
import css from './Hero.module.scss'
import {motion} from 'framer-motion'
import { fadeIn,slideIn, staggerContainer } from '../../utils/motion'

const Hero=()=>{

    return <section className={`paddings ${css.wrapper}`}> 
            <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once:false,amount:0.25}}

            
            className={`innerWidth ${css.container}`}>
                <div className={`${css.upperElements}`}>
                    <motion.span 
                    variants={fadeIn("right","tween",0.2,1)}
                    
                    className='primaryText'>Hey There, <br/> I'm Ankit Saxena.</motion.span>
                    <motion.span 
                     variants={fadeIn("left","tween",0.4,1)}
                    className='secondaryText'>I am a Mern Developer <br/>
                    Coding makes me Happy!
                    </motion.span>


                </div>

                <motion.div 
                 variants={fadeIn("up","tween",0.3,1)}
                className={css.person}>
                    <motion.img 
                     variants={slideIn("up","tween",0.5,1.3)}
                    src='./person.png' />
                </motion.div>

                {/* email */}
                <a className={css.email} href="mailto:juetankit@gmail.com">

                    juetankit@gmail.com
                </a>
                
                
                <div className={`${css.lowerElements}`}>
                    <div className={css.experience}>
                        <motion.div
                         variants={fadeIn("right","tween",0.2,1)}
                        className="primaryText">
                            1
                        </motion.div>

                        <div className="secondaryText">
                          <motion.div
                           variants={slideIn("up","tween",0.2,1)}
                          >Year</motion.div>
                          <motion.div
                           variants={slideIn("up","tween",0.2,1)}
                          >Experience</motion.div>

                        </div>

                    </div>
                    <div className={css.certificate}>
                        <motion.img 
                         variants={fadeIn("left","tween",0.2,1)}
                        src='./certificate.png'/>
                        <motion.span
                         variants={slideIn("up","tween",0.2,1)}
                        >Certified Professional</motion.span>
                        <motion.span
                         variants={slideIn("up","tween",0.2,1)}
                        >MERN Stack Developer</motion.span>
                        
                    </div>

                </div>

            </motion.div>
    </section>
}

export default Hero