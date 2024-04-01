import React from 'react'
import './Home.css'
import ActivityContainer from './ActivityContainer'
import EventContainer from './EventContainer'
import HeroContainer from './HeroContainer'
import Advertizement from './Advertizement'
import GalleryContainer from './GalleryContainer'
import InfoCount from './InfoCount'

const Home = () => {


    return (
        <>
            <div className='position-relative'>
                <HeroContainer />
                <InfoCount />
                {/* <ActivityContainer /> */}
            </div>
            <EventContainer />
            <Advertizement />
            <GalleryContainer />
        </>
    )
}

export default Home
