import React from 'react';
import './signup.css';

import { FcGoogle } from 'react-icons/fc';

// MUI
import {
    Grid,
    TextField,
    Link, 
    Button,
} from '@mui/material';


const SignUp = () => {
    return (
        <Grid className="logInform">
        <Grid container xs={4} className="logInform" spacing={2} Width={600} minWidth={300}>
            <Grid item sm={12}>
                <h2>
                Create an account
                </h2>
            </Grid>
            <Grid item sm={12}>
                <p>Start your journey!</p>
            </Grid>
            <Grid item sm={12} className='marginauto'>
                <TextField fullWidth id="outlined-basic" size="small" label="First Name" variant="outlined" placeholder="Enter your First name " required />
            </Grid>
            <Grid item sm={12} className='marginauto'>
                <TextField fullWidth id="outlined-basic" size="small" label="Last Name" variant="outlined" placeholder="Enter your Last name" required />
            </Grid>
            <Grid item sm={12} className='marginauto'>
                <TextField fullWidth id="outlined-basic" size="small" label="Email" variant="outlined" placeholder="Enter your email" required />
            </Grid>

            <Grid item sm={12} className='marginauto'>
                <TextField label='Password' size="small" placeholder='Create a password' type='password' fullWidth required />
                
            </Grid>
            <Grid item sm={12} minWidth={250}>
                <Button type='submit' color='primary' variant="contained" fullWidth>Get started</Button>
            </Grid>


            <Grid item sm={12}>
                <Button variant="outlined" fullWidth>
                    <FcGoogle size={24}/>
                    &nbsp; Sign in with Google
                </Button>
            </Grid>

            <Grid item sm={12}>
                Already have an account? &nbsp; 
                <Link href="/login" >
                    Log In
                </Link>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default SignUp