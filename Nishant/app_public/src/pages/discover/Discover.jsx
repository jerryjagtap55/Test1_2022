import React from 'react';
import { Card } from '../../components/index';
import './discover.css'

const Discover = () => {
    const handleClick = () => {
        console.info('You clicked the button.');
    };
    return (
        <>
            <div className='text-center'>
                <div className='d-flex justify-content-around mb-3'>
                    <button type='button' className='Chips btn btn-light'
                        onClick={handleClick}
                    >
                        Top Seller
                    </button>

                    <button type='button' className='Chips btn btn-light'
                        onClick={handleClick}
                    >
                        Morden Art
                    </button>
                    <button type='button' className='Chips btn btn-light'
                        onClick={handleClick}
                    >
                        Virtual Fashion
                    </button>

                    <button type='button' className='Chips btn btn-light'
                        onClick={handleClick}
                    >
                        Gaming
                    </button>

                    <button type='button' className='Chips btn btn-light'
                        onClick={handleClick}
                    >
                        Artwork
                    </button>


                </div>
                <div className='d-flex justify-content-evenly'>

                    <button type='button' className='Chips btn btn-light'
                        onClick={handleClick}
                    >
                        Memes
                    </button>

                    <button type='button' className='Chips btn btn-light'
                        onClick={handleClick}
                    >
                        Miscellaneous
                    </button>

                    <button type='button' className='Chips btn btn-light'
                        onClick={handleClick}
                    >
                        Collectible items
                    </button>

                    <button type='button' className='Chips btn btn-light'
                        onClick={handleClick}
                    >
                        Pixel Art
                    </button>


                </div>
                <h4 className='display-5 my-4'>
                    Let the Biding begin!
                </h4>

            </div>
            <div className='d-flex justify-content-center flex-column align-items-center mb-3'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            
             </div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Discover