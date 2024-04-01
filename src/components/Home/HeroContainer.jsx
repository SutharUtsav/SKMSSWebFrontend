import React from 'react'
import CommunityHall from '../../images/community-hall.png'


const HeroContainer = () => {
    return (
        <section className='hero-section'>
            <div className='container hero-container'>
                <div className='image-container'>
                    <img src={CommunityHall} alt='Shree Vishvakarma Bhagwan'></img>
                </div>
            </div>

        </section>
    )
}

export default HeroContainer
