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
                    <p>Sergio Saffe is an Argentinian DJ producer, settled in Córdoba, resident of La Fábrica and Basement Club; his sound is a mixture of minimal and fresh and dynamic tech house.</p>
                    <p>His sessions are linear of great intensity, where percussion and constant groove predominate.</p>
                    <p>His productions began in 2008, sealing for Godeeva Records, Sophia Records, Packet Music, Muuv, No Preset Sk Recording, Dirty Club Music and Habla Music.</p>
                    <p>Nowadays, he is part of successful discography seals like Deeperfect, Roushlabel, Lapsus, 303 Lovers, Whoyostro White, Lemon-Aid Music, Be One, Play Mobil, Under No Illusion, and more.</p>
                    <p>His releases count with the support of producers such as Jamie Jones, Paco Osuna, Cuartero, Loco Dice, Richie Hawtin, Michael Bibi, among others.</p>
                    <p>He has shared cabin with Marco Carola, Hot Since 82, Peggy Gou, Kolombo, Pawsa, Dennis Cruz, Latmun, Toman, Wade, Stefano Noferini, Miguel Bastida, Raffa FI, Waff, Richy Ahmed, Marc Houle, Oliver Huntemann, Alan Fitzpatrick, Ben Klock, Bart Skils, etc.</p>
                    <p>The passion, dedication and love for music have led him to perform both nationally and internationally in prestigious venues like Crobar Club, Salón Metropolitano, La Estación, Rio Electronic Music, La Fábrica, The Bow, Espacio Broadway, Bahrein, La Boite Tucuman, and more.</p>
                    <p>In his own style, the secret is to make an emotional exchange with the public through catchy rhythms, where people enjoy and take with them a unique experience.</p>
                </div>
                <div className="about-me">
                    <a href="/aboutme/Sergio-Saffe.pdf" download="Sergio Saffe Welcome">More About Me</a>
                </div>
            </div>
        </div>
    )
}

export default Biography