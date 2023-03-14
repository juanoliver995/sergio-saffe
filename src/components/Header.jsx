import { motion } from "framer-motion"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"

const Header = () => {
    return (
        <motion.div
            initial={{
                height: "100vh",
                backgroundColor: "black",
            }}
            animate={{
                backgroundColor: "rgba(0, 0, 0, 0.747)",
                height: "10vh"
            }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                delay: .6
            }}
            viewport={{ once: true }}
            className="nav-bar">
            <motion.img
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    ease: "easeInOut",
                    duration: .6,
                    delay: 2
                }}
                src="/images/logotipo-sergio.png" />
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    ease: "easeInOut",
                    duration: .6,
                    delay: 2
                }}
                className='social-share'>
                <a target="_blank" rel="noreferer" href="https://www.instagram.com/sergiosaffe/?hl=es-la">
                    <div className='item-social'>
                        <img src={instagram} />
                    </div>
                </a>
                <a target="_blank" rel="noreferer" href="https://twitter.com/SergioSaffe">
                    <div className='item-social'>
                        <img src={twitter} />
                    </div>
                </a>
                <a target="_blank" rel="noreferer" href="https://www.facebook.com/saffesergio">
                    <div className='item-social'>
                        <img src={facebook} />
                    </div>
                </a>
            </motion.div>
        </motion.div>
    )
}

export default Header