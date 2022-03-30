import React from 'react';
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

const Product_page = () => {

    // event handeler
    function onSubmit() {
        var amount = document.getElementById('amount').value;
        var password = document.getElementById('password').value;

    }

    return (
        <>
            <div className='text-center my-5'>
                <div className="card mb-3">

                    <div className="card-body row">
                        <div className="col-md-7 card_img-holder">
                            <img src={card_img} className="img-fluid rounded-start product_img" alt="Card" />
                        </div>
                        
                        <div className="col-md-5">
                            <div>
                                <h4 className='card-title display-6'>Card Title</h4>
                                <h6 className='card-subtitle mb-2 text-muted'>
                                    by User
                                </h6>
                                <p className="card-text small">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>


                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">1st Bid!</li>
                                    <li className="list-group-item">Current Bid!</li>
                                    <li className="list-group-item"></li>
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
                                    Timer:  1Day  20hrs  10mins
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer text-muted small text-start">
                        2 days ago
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product_page