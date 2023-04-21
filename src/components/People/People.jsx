import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

export default function People(){

    return (

        <motion.section 
        variants={staggerChildren}
        initial='hidden'
        whileInView='show'
        viewport={{once:false,amount:0.25}}
        className={`paddings ${css.wrapper}`}>
            <div className={`yPaddings innerWidth ${css.container}`}>
               <div className={`flexCenter ${css.heading}`}>
                <span className="primaryText">
                    Mentor Comments 
                </span>
                <p style={{marginTop:'2rem'}}>
                   I got to work with wonderful and experienced people while working in my previous companies.
                </p>

                <p>
                  Here's what my mentors have to say about me.
                </p>
                
               </div>

               <div className={css.comments}>
                <Slider 
                className={css.slider}
                   {...sliderSettings}
                
                >
                    {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt="" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
                 
                </Slider>
               </div>
            </div>
        </motion.section>
    )
}