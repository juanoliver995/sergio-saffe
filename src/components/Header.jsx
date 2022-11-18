import { motion } from "framer-motion"

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
                duration: 3,
                delay: 2
            }}
            viewport={{ once: true }}
            className="nav-bar">
            <motion.img
                initial={{
                    width: "500px",
                    opacity: 0
                }}
                animate={{
                    width: "200px",
                    opacity: 1
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 2
                }}
                src="/images/logotipo-sergio.png" />
        </motion.div>
    )
}

export default Header