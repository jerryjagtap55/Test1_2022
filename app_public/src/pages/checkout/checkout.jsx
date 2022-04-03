import React from 'react';
import {
    TextField,
    Grid,
    FormControlLabel,
    Checkbox,
    button
} from '@mui/material';
import { Sidebar } from '../../containers';
import StripeContainer from "../../Stripe/StripeContainer";


const checkout = () => {
    return (
        <>

            <div className='row'>
                <Sidebar>

                </Sidebar>
                <div className='mx-4 dashboard flex-fill col-md-7'>
                    <div>
                        <h4 className='display-6'>
                            Checkout
                        </h4>
                    </div>
                    <hr />
                    <div>
                        
                        <div className='stripe-div'>
                            {/* <h6 className='my-4'>
                                Enter Your Details
                            </h6>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="username"
                                        label="Username"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="email"
                                        label="Email"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="zipcode"
                                        label="Zip Code"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                                
                            </Grid> */}

                            <h6 className='my-4'>
                                 Disclaimer: Payment Gateway for education purposes, please do not proceed for the payment
                            </h6>
                            {/* <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="cardName"
                                        label="Name on card"
                                        fullWidth
                                        autoComplete="cc-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="cardNumber"
                                        label="Card number"
                                        fullWidth
                                        autoComplete="cc-number"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="expDate"
                                        label="Expiry date"
                                        fullWidth
                                        autoComplete="cc-exp"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="cvv"
                                        label="CVV"
                                        helperText="Last three digits on signature strip"
                                        fullWidth
                                        autoComplete="cc-csc"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox color="primary" name="saveCard" value="yes" />}
                                        label="Remember credit card details for next time"
                                    />
                                </Grid>
                            </Grid> */}
                            <StripeContainer />
                        </div>
                    </div>
                </div>
            </ div>

        </>
    )
}

export default checkout