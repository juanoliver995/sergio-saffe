import { useRef } from "react"

const Slider = () => {
    const imgMetro = useRef()
    const imgCrobar = useRef()
    const imgBasement = useRef()
    const imgSundae = useRef()
    const imgStudio = useRef()
    const imgFabrica = useRef()

    const metro = () => {

        imgMetro.current.style.visibility = "visible"
        imgMetro.current.style.opacity = "1"

        imgCrobar.current.style.visibility = "hidden"
        imgCrobar.current.style.opacity = "0"

        imgBasement.current.style.visibility = "hidden"
        imgBasement.current.style.opacity = "0"

        imgSundae.current.style.visibility = "hidden"
        imgSundae.current.style.opacity = "0"

        imgStudio.current.style.visibility = "hidden"
        imgStudio.current.style.opacity = "0"

        imgFabrica.current.style.visibility = "hidden"
        imgFabrica.current.style.opacity = "0"
    }

    const crobar = () => {
        imgCrobar.current.style.visibility = "visible"
        imgCrobar.current.style.opacity = "1"

        imgMetro.current.style.visibility = "hidden"
        imgMetro.current.style.opacity = "0"

        imgBasement.current.style.visibility = "hidden"
        imgBasement.current.style.opacity = "0"

        imgSundae.current.style.visibility = "hidden"
        imgSundae.current.style.opacity = "0"

        imgStudio.current.style.visibility = "hidden"
        imgStudio.current.style.opacity = "0"

        imgFabrica.current.style.visibility = "hidden"
        imgFabrica.current.style.opacity = "0"
    }

    const basement = () => {
        imgBasement.current.style.visibility = "visible"
        imgBasement.current.style.opacity = "1"

        imgMetro.current.style.visibility = "hidden"
        imgMetro.current.style.opacity = "0"

        imgCrobar.current.style.visibility = "hidden"
        imgCrobar.current.style.opacity = "0"

        imgSundae.current.style.visibility = "hidden"
        imgSundae.current.style.opacity = "0"

        imgStudio.current.style.visibility = "hidden"
        imgStudio.current.style.opacity = "0"

        imgFabrica.current.style.visibility = "hidden"
        imgFabrica.current.style.opacity = "0"
    }

    const sundae = () => {
        imgSundae.current.style.visibility = "visible"
        imgSundae.current.style.opacity = "1"

        imgMetro.current.style.visibility = "hidden"
        imgMetro.current.style.opacity = "0"

        imgCrobar.current.style.visibility = "hidden"
        imgCrobar.current.style.opacity = "0"

        imgBasement.current.style.visibility = "hidden"
        imgBasement.current.style.opacity = "0"

        imgStudio.current.style.visibility = "hidden"
        imgStudio.current.style.opacity = "0"

        imgFabrica.current.style.visibility = "hidden"
        imgFabrica.current.style.opacity = "0"

    }

    const studio = () => {
        imgStudio.current.style.visibility = "visible"
        imgStudio.current.style.opacity = "1"

        imgMetro.current.style.visibility = "hidden"
        imgMetro.current.style.opacity = "0"

        imgCrobar.current.style.visibility = "hidden"
        imgCrobar.current.style.opacity = "0"

        imgBasement.current.style.visibility = "hidden"
        imgBasement.current.style.opacity = "0"

        imgSundae.current.style.visibility = "hidden"
        imgSundae.current.style.opacity = "0"

        imgFabrica.current.style.visibility = "hidden"
        imgFabrica.current.style.opacity = "0"
    }

    const fabrica = () => {
        imgFabrica.current.style.visibility = "visible"
        imgFabrica.current.style.opacity = "1"

        imgMetro.current.style.visibility = "hidden"
        imgMetro.current.style.opacity = "0"

        imgCrobar.current.style.visibility = "hidden"
        imgCrobar.current.style.opacity = "0"

        imgBasement.current.style.visibility = "hidden"
        imgBasement.current.style.opacity = "0"

        imgSundae.current.style.visibility = "hidden"
        imgSundae.current.style.opacity = "0"

        imgStudio.current.style.visibility = "hidden"
        imgStudio.current.style.opacity = "0"

    }

    return (
        <section className="event-section">
            <div className="container">
                <div className="hovered-events">
                    <img ref={imgMetro} id="metropolitano" src="/images/287488448_768722297471330_4490157389570401902_n (1).webp" />
                    <img ref={imgCrobar} id="crobar" src="/images/slider-crobar.webp" />
                    <img ref={imgSundae} id="sundae" src="/images/DSC00032.jpg" />
                    <img ref={imgBasement} id="basement" src="/images/DSC01735 (1).jpg" />
                    <img ref={imgFabrica} id="fabrica" src="/images/DSC03047.jpg" />
                    <img ref={imgStudio} id="studio" src="/images/DSC09634 (1).jpg" />
                </div>
                <div className="event-title-rows">
                    <div className="event-title-row">
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={metro}>Metropolitano</span>
                            <span className="event-title" onMouseEnter={crobar}>Crobar</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={metro}>Metropolitano</span>
                            <span className="event-title" onMouseEnter={crobar}>Crobar</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={metro}>Metropolitano</span>
                            <span className="event-title" onMouseEnter={crobar}>Crobar</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={metro}>Metropolitano</span>
                            <span className="event-title" onMouseEnter={crobar}>Crobar</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={metro}>Metropolitano</span>
                            <span className="event-title" onMouseEnter={crobar}>Crobar</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={metro}>Metropolitano</span>
                            <span className="event-title" onMouseEnter={crobar}>Crobar</span>
                        </div>
                    </div>
                    <div className="event-title-row">
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={basement}>Basement</span>
                            <span className="event-title" onMouseEnter={sundae}>Sundae</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={basement}>Basement</span>
                            <span className="event-title" onMouseEnter={sundae}>Sundae</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={basement}>Basement</span>
                            <span className="event-title" onMouseEnter={sundae}>Sundae</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={basement}>Basement</span>
                            <span className="event-title" onMouseEnter={sundae}>Sundae</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={basement}>Basement</span>
                            <span className="event-title" onMouseEnter={sundae}>Sundae</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={basement}>Basement</span>
                            <span className="event-title" onMouseEnter={sundae}>Sundae</span>
                        </div>
                    </div>
                    <div className="event-title-row">
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={studio}>Studio Theater</span>
                            <span className="event-title" onMouseEnter={fabrica}>La Fabrica</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={studio}>Studio Theater</span>
                            <span className="event-title" onMouseEnter={fabrica}>La Fabrica</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={studio}>Studio Theater</span>
                            <span className="event-title" onMouseEnter={fabrica}>La Fabrica</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={studio}>Studio Theater</span>
                            <span className="event-title" onMouseEnter={fabrica}>La Fabrica</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={studio}>Studio Theater</span>
                            <span className="event-title" onMouseEnter={fabrica}>La Fabrica</span>
                        </div>
                        <div className="event-title-row-first">
                            <span className="event-title" onMouseEnter={studio}>Studio Theater</span>
                            <span className="event-title" onMouseEnter={fabrica}>La Fabrica</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider