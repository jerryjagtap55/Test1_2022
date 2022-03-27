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

const Product_page = () => {

    // event handeler
    function onSubmit() {
        var amount = document.getElementById('amount').value;
        var password = document.getElementById('password').value;

    }

    return (
        <>
            <div class='text-center my-5'>
                <div class="card mb-3">

                    <div class="card-body row">
                        <div class="col-md-7">
                            <img src="" class="img-fluid rounded-start" alt="Card Image" />
                            <p>Image</p>
                        </div>
                        <div class="col-md-5">
                            <div>
                                <h4 class='card-title display-6'>Card Title</h4>
                                <h6 class='card-subtitle mb-2 text-muted'>
                                    by User
                                </h6>
                                <p class="card-text small">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>


                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">1st Bid!</li>
                                    <li class="list-group-item">Current Bid!</li>
                                    <li class="list-group-item"></li>
                                </ul>

                                <div class='d-flex align-items-baseline justify-content-between'>
                                    <p class='lead'>
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
                                <p class='card-text lead text-muted my-4'>
                                    Timer:  1Day  20hrs  10mins
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer text-muted small text-start">
                        2 days ago
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product_page