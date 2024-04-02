import React from 'react'
import './Home.css'


const InfoCount = () => {

    return (
        <>
            <section className='info-count-section'>
                <div className='row info-count-container container py-3 py-sm-5'>
                    <div className="col counter-container my-sm-3 px-2 px-sm-5">
                        <span className='count'>258+</span>
                        <div className=' mx-4 count-desc'>
                            <span>Wedding</span>
                            <span>Function</span>
                        </div>
                    </div>
                    <div className="col counter-container my-3 px-2 px-sm-5">
                        <span className='count'>263+</span>
                        <div className=' mx-4 count-desc'>
                            <span>Festival</span>
                            <span>Celebration</span>
                        </div>
                    </div>
                    <div className="col counter-container my-3 px-2  px-sm-5">
                        <span className='count'>60+</span>
                        <div className=' mx-4 count-desc'>
                            <span>Community</span>
                            <span>Events</span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default InfoCount

