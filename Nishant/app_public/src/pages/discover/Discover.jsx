import React from 'react';
import { Card } from '../../containers';
import { Chip } from '@mui/material';
import './discover.css'

const Discover = () => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <>
            <div class='text-center'>
                <div class='d-flex justify-content-around mb-3'>
                    <Chip
                        label="Top Seller"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />

                    <Chip
                        label="Morden Art"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                    <Chip
                        label="Virtual Fashion"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                    <Chip
                        label="Gaming"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                    <Chip
                        label="Artwork"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />

                </div>
                <div class='d-flex justify-content-evenly'>
            
                    <Chip
                        label="Memes"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                    <Chip
                        label="Miscellaneous"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                    <Chip
                        label="Collectible items"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                    <Chip
                        label="Pixel Art"
                        variant="outlined"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />

                </div>
                <h4 class='display-5 my-4'>
                    Let the Biding begin!
                </h4>

            </div>
            <div class='d-flex justify-content-center flex-column align-items-center mb-3'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Discover