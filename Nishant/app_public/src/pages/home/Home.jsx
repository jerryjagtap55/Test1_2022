import React from 'react';
import { Hero, Carousel } from '../../containers/index';
import './home.css';
import { useParams } from 'react-router';
import { getAccordionDetailsUtilityClass } from '@mui/material';

//const param = useParams();
const Home = () => {
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
    return (
        <>
            <Hero></Hero>
            <div className='container px-4 py-5 text-center'>
                <h2 className="pb-2 display-6 border-bottom">Hot Bids!</h2>
                <Carousel data={fetchdata()}></Carousel>
            </div>


        </>
    );
};

export default Home;