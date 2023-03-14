import gmail from '../assets/gmail.svg'
import phone from '../assets/phone.svg'
import instagram from "../assets/instagram.svg"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-footer'>
                <div className='booking'>
                    <h2>For Booking</h2>
                    <a className='unique-contact' href='mailto:info@meed-agency.com'><img src={gmail} />info@meed-agency.com</a>
                    <a className='unique-contact' href='https://walink.co/c73708'><img src={phone} />+54 9 3513 50-3819</a>
                    <a className='unique-contact' href='https://www.instagram.com/unique.communityba/?hl=es-la' ><img src={instagram} />@meedagencyar</a>
                </div>
                <div className='work'>
                    <h2>Design By</h2>
                    <a href='https://www.instagram.com/agustinguaraglia/?hl=es-la'>Agustin Guaraglia</a>
                    <h2>Development By</h2>
                    <a className='unique-contact' href='https://www.instagram.com/juan.oliver/?hl=es-la'>Juan Oliver</a>
                </div>
            </div>
            <div className='copy'>
                <p>@COPYRIGHT SERGIO SAFFE 2022</p>
            </div>
        </div>
    )
}

export default Footer
