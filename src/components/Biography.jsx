import { motion } from "framer-motion"

const Biography = () => {
    return (
        <div className='bio'>
            <div className='img-bio'>
                <motion.img
                    initial={{
                        opacity: 0,
                        x: -200

                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 2
                    }}
                    viewport={{ once: true }}
                    src="/images/recorte-bio.png" />
            </div>
            <div className='info-bio'>
                <h2>Biography</h2>
                <div>
                    <p>Sergio Saffe is an important avant-garde artist, Mostly known for his organic and lineal sets full
                        of percussion sound and envelope bassline.</p>
                    <p>After a tireless dedication in study of various genres, Sergio decided to expand his musical
                        spectrum, adding to his roots a new wave of sounds, creating his own particular and unique
                        brand of tech — house merged with techno, achieving a great adaptation to the current scene.
                        Sergio ́s production stage begins in 2008, releasing music on labels such as Godeeva Records,
                        Sophia Records, Packet Music, Muuv, No Preset, Sk Recording, Dirty Music Club and Habla
                        Music.</p>
                    <p>In his long journey djing he shared stages with some of the best artist in the scene including
                        Marco Carola, Hot Since 82, Stefano Noferini, Dennis Cruz, H.O.S.H , Los Suruba, Wade,
                        Andhim, Riva Starr, Guy Gerber, Fran Bortolossi, Marc Houle, Oliver Huntemann, Alan
                        Fitzpatrick, Dominik Eulberg, Lee Burridge, Ben Klock, Do Santos, Bart Skill among others.</p>
                </div>
                <div className="about-me">
                    <a href="/aboutme/SergioSaffe-Welcome.pdf" download="Sergio Saffe Welcome">More About Me</a>
                </div>
            </div>
        </div>
    )
}

export default Biography