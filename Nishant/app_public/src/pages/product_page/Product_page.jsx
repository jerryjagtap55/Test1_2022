import * as React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// Actions
import { loadAdDetails, loadAdImage, setImageLoadingStatus } from '../../actions/ad';
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
import card_img from '../../assets/art5.jpg';
import { secondsToHmsShort } from '../../../utils/secondsToHms';

const Product_page = ( props ) => {
    const navigate = useNavigate();

    const handleCardClick = ( e ) => {
        navigate( `/ads/${ props.ad._id }` );

    };

    const updateAuctionStatus = ( ad ) => {
        if ( ad.sold ) {
            return 'Sold';
        } else if ( ad.auctionEnded ) {
            return 'Ended, not-sold';
        } else if ( !ad.auctionStarted ) {
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