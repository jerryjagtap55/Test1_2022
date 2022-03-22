import React from 'react';
import './login.css';
import { FcGoogle } from 'react-icons/fc';

// MUI
import {
    Grid,
    TextField,
    Link,
    FormControlLabel,
    Checkbox,
    Button,
} from '@mui/material';



const Login = () => {
    return (

        <Grid className="logInform">
            <Grid container xs={4} className="logInform" spacing={2} Width={600} minWidth={300} >
                <Grid item sm={8}>
                    <h2>
                        Log in to your account
                    </h2>
                </Grid>
                <Grid item sm={12}>
                    <p>Welcome back! Please enter your details.</p>
                </Grid>
                <Grid item sm={12} className='marginauto'>
                    <TextField fullWidth id="outlined-basic" size="small" label="Email" variant="outlined" placeholder="Please enter your email" required />
                </Grid>
                <Grid item sm={12} className='marginauto'>
                    <TextField label='Password' size="small" placeholder='Enter password' type='password' fullWidth required />
                    
                </Grid>
                <Grid item sm={12} className='rememberstyle'>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Link href="#" >
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item sm={12} minWidth={250}>
                    <Button type='submit' color='primary' variant="contained" fullWidth>Log in</Button>
                </Grid>


                <Grid item sm={12}>
                    <Button variant="outlined" fullWidth>
                        <FcGoogle />
                        &nbsp; Sign in with Google
                    </Button>
                </Grid>

                <Grid item sm={12}>
                    Don't have an account? &nbsp; 
                    <Link href="/signup" >
                        Sign Up
                    </Link>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Login