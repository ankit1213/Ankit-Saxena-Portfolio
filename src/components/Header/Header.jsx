import React,{useState} from 'react'
import css from './Header.module.scss'
import {BiPhoneCall,BiMenuAltRight} from 'react-icons/bi'
import {motion} from 'framer-motion'
import {getMenuStyles, headerVariants} from '../../utils/motion'
import useHeaderShadow from '../../hooks/useHeaderShadow'
const Header=()=>{
    const [menuOpened,setMenuOpened]=useState(false)
const headerShadow=useHeaderShadow()
    return (
        <motion.div 
        initial="hidden"
        whileInView="show" 
        variants={headerVariants}
        viewport={{once:false,amount:0.25}}
        
        className={`paddings ${css.wrapper}`}
        style={{boxShadow:headerShadow}}
        >
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    Ankit
                </div>

                <ul 
                style={getMenuStyles(menuOpened)}
                className={`flexCenter ${css.menu}`}>
                    <li><a href="">Services</a></li>
                    <li><a href=".anchor">Experience</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <p>8770532169</p>
                        <BiPhoneCall size={'40px'}/>
                    </li>

                </ul>

                <div 
                onClick={()=>{setMenuOpened(!menuOpened)}}
                className={css.menuIcon}>
                    <BiMenuAltRight size={30}/>
                </div>

            </div>
        </motion.div>
    )
}

export default Header