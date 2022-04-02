import React from 'react';
import {Hero, Carousel} from '../../containers/index';
import './home.css'

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <div className='container px-4 py-5 text-center'> 
            <h2 className="pb-2 display-6 border-bottom">Hot Bids!</h2>
            <Carousel></Carousel>
            </div>

        </>
    )
}

export default Home