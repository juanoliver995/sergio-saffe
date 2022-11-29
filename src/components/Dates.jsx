import Date from "./Date"

const Dates = ({ dates }) => {
    return (
        <div className='dates-container'>
            <div className='position-dates'>
                <div className='dates'>
                    {
                        dates.map(date => (
                            <Date date={date} key={date._id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dates