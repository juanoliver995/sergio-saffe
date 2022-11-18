import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import beatport from "../assets/beatport.svg"
import facebook from "../assets/facebook.svg"

const Hero = () => {
    return (
        <div className='hero'>
            <div className='info-hero'>
                <div className='title-hero'>
                    <h1>Welcome to my Site</h1>
                </div>
                <div className='social-share'>
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
                </div>
            </div>
        </div>
    )
}

export default Hero