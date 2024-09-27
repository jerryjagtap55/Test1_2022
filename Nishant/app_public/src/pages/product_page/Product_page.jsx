import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import openSocket from 'socket.io-client';
// Mui
import {
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    Button,
    IconButton,
} from '@mui/material';
import './product_page.css';
import DoneIcon from '@mui/icons-material/Done';
import { secondsToHmsShort } from '../../utils/secondsToHms';
// Actions
import {
    loadAdDetails,
    loadAdImage,
    loadHighestBid,
    placeBid,
    startAuction,
    updateTimer,
    updateAdDetails,
    clearAdImage,
    setImageLoadingStatus,
    clearAdDetails,
} from '../../actions/ad';
import { setAlert, clearAlerts } from '../../actions/alert';
import Alert from '../../components/Alert';

const Product_page = ( props ) => {
    const params = useParams();
    const [ bidPrice, setBidPrice ] = useState( 0 );
    const [ bidButton, setBidButton ] = useState( true );
    const [ ownerAd, setOwnerAd ] = useState( false );
    const [ startButton, setStartButton ] = useState( true );
    const navigate = useNavigate();

    // Bid button status
    const updateBidButtonStatus = ( updatedPrice ) => {
        if (
            updatedPrice > Number( props.adDetails.currentPrice.$numberDecimal ) &&
            props.adDetails.auctionStarted &&
            !props.adDetails.auctionEnded
        ) {
            setBidButton( false );
        } else {
            setBidButton( true );
        }
    };

    useEffect( () => {
        props.clearAlerts();
        props.setImageLoadingStatus();
        props.loadAdDetails( params.adId );
    }, [ params.adId ] );

    useEffect( () => {
        if ( props.adDetails.image ) {
            props.loadAdImage( props.adDetails.image );
        }
    }, [ props.adDetails.image ] );

    useEffect( () => {
        props.loadHighestBid( params.adId );
    }, [ params.adId ] );

    useEffect( () => {
        updateBidButtonStatus( bidPrice );
    }, [ bidPrice, props.adDetails.auctionEnded ] );

    // For ad rooms
    useEffect( () => {
        const adSocket = openSocket( process.env.REACT_APP_API_BASE_URL, {
            path: '/socket/adpage',
        } );
        // User enters add page
        adSocket.emit( 'joinAd', { ad: params.adId.toString() } );
        // Auction is started
        adSocket.on( 'auctionStarted', ( res ) => {
            console.log( res );
            props.updateAdDetails( res.data );
            props.clearAlerts();
            if ( res.action === 'started' ) props.setAlert( 'Auction started!', 'info' );
        } );
        // Auction is ended
        adSocket.on( 'auctionEnded', ( res ) => {
            if ( res.action === 'sold' ) {
                props.updateAdDetails( res.ad );
                props.clearAlerts();
                props.setAlert( `Auction ended, item sold to ${ res.winner.username }!`, 'info' );
            } else {
                props.updateAdDetails( res.data );
                props.clearAlerts();
                props.setAlert( 'Item not sold', 'info' );
            }
        } );
        // Timer
        adSocket.on( 'timer', ( res ) => {
            props.updateTimer( res.data );
        } );
        // Bid is posted
        adSocket.on( 'bidPosted', ( res ) => {
            console.log( 'bidposted' );
            props.loadHighestBid( res.data._id );
            props.updateAdDetails( res.data );
        } );

        return () => {
            adSocket.emit( 'leaveAd', { ad: params.adId.toString() } );
            adSocket.off();
            props.clearAdDetails();
            props.clearAdImage();
        };
        // setAdSocketState(adSocket);
    }, [ params.adId ] );

    // Check if current user is the owner of ad
    useEffect( () => {
        if ( props.adDetails.owner && props.auth.user ) {
            if ( props.adDetails.owner._id === props.auth.user._id ) setOwnerAd( true );
            else setOwnerAd( false );
        }
        // Check start button
        if ( !props.adDetails.auctionStarted && !props.adDetails.auctionEnded ) {
            setStartButton( true );
        } else {
            setStartButton( false );
        }
    }, [
        props.adDetails.owner,
        props.auth.user,
        props.adDetails.auctionStarted,
        props.adDetails.auctionEnded,
    ] );

    if ( props.authLoading ) {
        return <Spinner />;
    }

    // Check if user is logged
    if ( !props.isAuth ) {
        navigate( '/login' );
    }

    if ( props.loading || props.loadingHighestBid ) {
        console.log( 'loading' );
        return <Spinner />;
    }

    const handleBidPriceChange = ( e ) => {
        setBidPrice( e.target.value );
    };

    const handleSubmitBid = ( e ) => {
        e.preventDefault();
        // Place bid
        props.placeBid( props.adDetails._id, bidPrice );
    };

    const handleStartAuction = ( e ) => {
        e.preventDefault();
        props.startAuction( props.adDetails._id );
        props.setAlert( 'Auction started', 'success' );
    };

    const getTimeRemaining = () => {
        return secondsToHms( props.adDetails.timer );
    };

    const getUTCDate = ( dt ) => {
        let isodt = new Date( dt );
        return isodt.toDateString();
    };

    // Auction status based on the ad-details
    const auctionStatus = () => {
        if ( props.adDetails.sold ) {
            return 'Sold';
        } else if ( props.adDetails.auctionEnded ) {
            return 'Ended, not-sold';
        } else if ( !props.adDetails.auctionStarted ) {
            return 'Upcoming';
        } else {
            return 'Ongoing';
        }
    };

    return (
        <>
            <a
                onClick={( e ) => {
                    handleCardClick( e );
                }}
                style={{ textDecoration: 'none' }}
            >
                <div className='text-center my-5'>
                    <div className="card mb-3">

                        <div className="card-body row">
                            <div className="col-md-7 card_img-holder">
                                <img src={props.ad.image ? props.ad.image : imagePlaceholder} className="img-fluid rounded-start product_img" alt="Card" />
                            </div>

                            <div className="col-md-5">
                                <div>
                                    <h4 className='card-title display-6'>{props.ad.productName}</h4>
                                    <h6 className='card-subtitle mb-2 text-muted'>
                                        by User don't know how to call user name
                                    </h6>
                                    <p className="card-text small">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>


                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Current Bid! {props.ad.currentPrice.$numberDecimal}</li>
                                    </ul>

                                    <div className='d-flex align-items-baseline justify-content-between'>
                                        <p className='lead'>
                                            Place Your bid :
                                        </p>
                                        <FormControl sx={{ m: 1 }} variant="standard">
                                            <Input
                                                size="small"
                                                id="amount"
                                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            />
                                        </FormControl>
                                        <IconButton type='submit' onClick={() => onSubmit()} aria-label="submit bid">
                                            <DoneIcon />
                                        </IconButton>

                                    </div>
                                    <p className='card-text lead text-muted my-4'>
                                        Remaining: {secondsToHmsShort( props.ad.timer )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer text-muted small text-start">
                            Status: {updateAuctionStatus( props.ad )}
                        </div>
                    </div>

                </div>
            </a>
        </>
    );
};

const mapStateToProps = ( state ) => ( {
    adDetails: state.ad.adDetails,
} );

export default connect( mapStateToProps, {
    loadAdDetails,
    loadAdImage,
    setImageLoadingStatus,
} )( Product_page );