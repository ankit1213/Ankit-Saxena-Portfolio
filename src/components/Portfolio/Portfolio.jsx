import React from "react";
import css from './Portfolio.module.scss'
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
export default function Portfolio(){


    return (

        <motion.section className={`paddings  ${css.wrapper}`}
        variants={staggerChildren}
        initial='hidden'
        whileInView='show'
        viewport={{once:false,amount:0.25}}
        
        >
                <div className={`innerWidth flexCenter ${css.container}`}>
                        <div className={`flexCenter ${css.heading}`}>
                            <div>
                                <span className="primaryText">
                                    My Latest Projects
                                </span>
                                <p style={{marginTop:'10px'}}>
                                    Built using the technologies such as ReactJs, NodeJs , MongoDB & more.
                                </p>
                            </div>

                            <span className="secondaryText">
                                Explore more projects
                            </span>
                        </div>

                        <div className={`flexCenter ${css.showCase}`}>
                            <motion.img
                            variants={fadeIn("up","tween",0.5,0.6)}
                            src="./tac.jfif"
                            alt='project'
                            />

                            <motion.img
                            variants={fadeIn("up","tween",0.7,0.6)}
                            src="./chat.jfif"
                            alt='project'
                            />

                            <motion.img
                            variants={fadeIn("up","tween",0.9,0.6)}
                            src="./todo.jfif"
                            alt='project'
                            />
                        </div>
                </div>
        </motion.section>
    )
}