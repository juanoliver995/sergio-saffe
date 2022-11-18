import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className='hero'>
            <div className='info-hero'>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 3,
                        delay: 4
                    }}
                    className='title-hero'>
                    <h1>Welcome to my Site</h1>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -50
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 4
                    }}
                    className='social-share'>
                    <a target="_blank" rel="noreferer" href="https://www.instagram.com/sergiosaffe/?hl=es-la">
                        <div className='item-social'>
                            <img src={instagram} />
                            <p>@sergiosaffe</p>
                        </div>
                    </a>
                    <a target="_blank" rel="noreferer" href="https://twitter.com/SergioSaffe">
                        <div className='item-social'>
                            <img src={twitter} />
                            <p>@SergioSaffe</p>
                        </div>
                    </a>
                    <a target="_blank" rel="noreferer" href="https://www.facebook.com/saffesergio">
                        <div className='item-social'>
                            <img src={facebook} />
                            <p>@saffesergio</p>
                        </div>
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero