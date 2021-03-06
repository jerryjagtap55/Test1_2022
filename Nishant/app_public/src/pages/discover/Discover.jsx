import React from 'react';
import { Card } from '../../containers';
import { Chip } from '@mui/material';
import './discover.css'

const Discover = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    /* 
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
     */
    return (
        <>
            <div className='text-center'>
                <div className='d-flex justify-content-around mb-3'>
                    <Chip
                        label="Top Seller"
                        variant="outlined"
                        onClick={handleClick}
                    />

                    <Chip
                        label="Morden Art"
                        variant="outlined"
                        onClick={handleClick}
                    />
                    <Chip
                        label="Virtual Fashion"
                        variant="outlined"
                        onClick={handleClick}
                    />
                    <Chip
                        label="Gaming"
                        variant="outlined"
                        onClick={handleClick}
                    />
                    <Chip
                        label="Artwork"
                        variant="outlined"
                        onClick={handleClick}
                    />

                </div>
                <div className='d-flex justify-content-evenly'>

                    <Chip
                        label="Memes"
                        variant="outlined"
                        onClick={handleClick}
                    />
                    <Chip
                        label="Miscellaneous"
                        variant="outlined"
                        onClick={handleClick}
                    />
                    <Chip
                        label="Collectible items"
                        variant="outlined"
                        onClick={handleClick}
                    />
                    <Chip
                        label="Pixel Art"
                        variant="outlined"
                        onClick={handleClick}
                    />

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