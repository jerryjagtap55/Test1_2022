import React from 'react';
import { Card } from '../../containers';
import { Chip } from '@mui/material';
import './discover.css';

const Discover = () => {
    async function fetchdata () {
        const response = await fetch( "http://localhost:4000/homedataapi/home" );
        if ( !response.ok ) {
            const message = `an error has occured `;
            window.alert( message );
            return;
        }
        const record = await response.json();
        if ( !record ) {
            window.alert( "record not found" );
            return;
        }
        return record;
        window.alert( record );
        console.log( record );
    }
    fetchdata();
    const handleClick = () => {
        console.info( 'You clicked the Chip.' );
    };
    const handleDelete = () => {
        console.info( 'You clicked the delete icon.' );
    };
    return (
        <>
            <div className='text-center'>
                <div className='d-flex justify-content-around mb-3'>
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
                <div className='d-flex justify-content-evenly'>

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
    );
};

export default Discover;