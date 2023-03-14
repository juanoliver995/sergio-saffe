import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
const Hero = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false
            }}
        >
            <SwiperSlide className='hero one'>
                <div className='hero-child'>
                    <h1>next dates of my tour</h1>
                    <div className='container-hero-dates'>
                        <div className='date hero-date'>
                            <div className='info-date'>
                                <div className='fecha'>
                                    <p className='day'>15</p>
                                    <p className='month'>mar</p>
                                </div>
                                <div className='club-country'>
                                    <p className='country'>playa del carmen &#127474;&#127485;</p>
                                    <p className='club'>speakeasy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-hero-dates'>
                        <div className='date hero-date'>
                            <div className='info-date'>
                                <div className='fecha'>
                                    <p className='day'>16</p>
                                    <p className='month'>mar</p>
                                </div>
                                <div className='club-country'>
                                    <p className='country'>playa del carmen &#127474;&#127485;</p>
                                    <p className='club'>on heaven</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-hero-dates'>
                        <div className='date hero-date'>
                            <div className='info-date'>
                                <div className='fecha'>
                                    <p className='day'>26</p>
                                    <p className='month'>mar</p>
                                </div>
                                <div className='club-country'>
                                    <p className='country'>miami &#127482;&#127480;</p>
                                    <p className='club'>tree house</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='hero two'>
                <div className='hero-child'>
                    <h1>listen to my last set</h1>
                    <h1>recorded at the </h1>
                    <h1>la fabrica cordoba, argentina</h1>
                    <div className='btn-listen'>
                        <a target="_blank" href='https://www.youtube.com/watch?v=pjdQM66xH4M&ab_channel=SergioSaffe'>listen now</a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='hero three'>
                <div className='hero-child'>
                    <h1>listen to my latest release "RAME EP" </h1>
                    <h1>with sanchez y narvaez</h1>
                    <div className='btn-listen'>
                        <a target="_blank" href='https://www.beatport.com/label/meed-records/106375'>listen now</a>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Hero