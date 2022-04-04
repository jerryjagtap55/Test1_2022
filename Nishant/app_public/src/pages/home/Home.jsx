import React from 'react';
import { connect } from 'react-redux';
import { Hero, Carousel } from '../../containers/index';
import Alert from '../../components/Alert';
import './home.css';

const Home = () => {
    return (
        <>
            <Alert />
            <Hero></Hero>
            <div className='container px-4 py-5 text-center'>
                <h2 className="pb-2 display-6 border-bottom">Hot Bids!</h2>
                <Carousel></Carousel>
            </div>
        </>
    );
};

const mapStateToProps = ( state ) => ( {
    loading: state.auth.loading,
    isAuth: state.auth.isAuthenticated,
} );


export default connect( mapStateToProps, {} )( Home );