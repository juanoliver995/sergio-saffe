
const Date = ({ date }) => {

    const { day, month, country, province, club, artist, urlTickets } = date
    return (
        <div className='date'>
            <div className='info-date'>
                <div className='fecha'>
                    <p className='day'>{day}</p>
                    <p className='month'>{month}</p>
                </div>
                <div className='club-country'>
                    <p className='country'>{province}, {country}</p>
                    {
                        artist
                            ? <p className='club'>{club} - {artist}</p>
                            : <p className='club'>{club}</p>
                    }

                </div>
            </div>
            <div className='btn-date'><a href={urlTickets} target="_blank">buy tickets</a></div>
        </div>
    )
}

export default Date