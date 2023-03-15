import { motion } from "framer-motion"
import instagram from "../assets/instagram.svg"
import soundcloud from "../assets/soundcloud.svg"
import youtube from "../assets/youtube.svg"

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
                <a target="_blank" rel="noreferer" href="https://soundcloud.com/sergiosaffe">
                    <div className='item-social'>
                        <img src={soundcloud} />
                    </div>
                </a>
                <a target="_blank" rel="noreferer" href="https://www.youtube.com/channel/UCURAWLVm5oajJfIrmLnsMQw">
                    <div className='item-social'>
                        <img src={youtube} />
                    </div>
                </a>
            </motion.div>
        </motion.div>
    )
}

export default Header