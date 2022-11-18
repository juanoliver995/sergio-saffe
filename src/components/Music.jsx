import beatport from '/music-logos/logobeatport.png'
import spoty from '/music-logos/logospoty.png'
import youtube from '/music-logos/logoyt.png'
import soundcloud from '/music-logos/soundcloudlogo.png'

const Music = () => {
    return (
        <div className='music'>
            <h1>Listen To My Music</h1>
            <div className='container-cards-music'>
                <a href='https://www.beatport.com/artist/sergio-saffe/110029' target="_blank" rel="noreferrer" >
                    <div className='card-music beatport'>
                        <img src={beatport} className="logo-beatport logo" />
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href='https://www.youtube.com/channel/UCURAWLVm5oajJfIrmLnsMQw'>
                    <div className='card-music youtube'>
                        <img src={youtube} className="logo" />
                    </div>
                </a>
                <a href='https://open.spotify.com/artist/2qPuQhV7c2QJ5jV7EUVtnT' target="_blank" rel="noreferrer">
                    <div className='card-music spotify'>
                        <img src={spoty} className="logo" />
                    </div>
                </a>
                <a href='https://soundcloud.com/sergiosaffe' target="_blank" rel="noreferrer">
                    <div className='card-music soundcloud'>
                        <img src={soundcloud} className="logo" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Music