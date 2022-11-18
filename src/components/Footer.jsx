import gmail from '../assets/gmail.svg'
import phone from '../assets/phone.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-footer'>
                <div className='booking'>
                    <h2>For Booking</h2>
                    <a className='unique-contact' href='mailto:emma@unique-community.com'><img src={gmail} />emma@unique-community.com</a>
                    <a className='unique-contact' href='https://walink.co/e5f366'><img src={phone} />+11 49896254</a>
                    <a href='https://www.instagram.com/unique.communityba/?hl=es-la' className='logo-unique'><img src='/images/logo-unique.png' /></a>
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
