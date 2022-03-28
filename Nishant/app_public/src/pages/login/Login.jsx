import React from 'react';
import './login.css';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
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

    // event handeler
    function onSubmit() {
        var emailValue = document.getElementById('email').value;
        var password = document.getElementById('password').value;



        axios.get('http://localhost:4000/app/signin', {
            params: {
                email: emailValue
            }
        }).then(response => {
            if (Object.keys(response.data).length) {

                if (response.data.password === password) {
                    console.log("login success");
                    //navigate to another page.
                    window.location = './Home'
                } else {
                    console.log("login unsuccess");
                }
            } else {
                console.log("email not found");
            }
        });



    }

    return (


        <Grid className="logInform">
            <Grid item container xs={4} className="logInform" spacing={2} width={600} minWidth={300} >
                <Grid item sm={12}>
                    <h2>
                        Log in to your account
                    </h2>
                </Grid>
                <Grid item sm={12}>
                    <p>Welcome back! Please enter your details.</p>
                </Grid>
                <Grid item sm={12} className='marginauto'>
                    <TextField fullWidth id="email" size="small" label="Email" variant="outlined" placeholder="Please enter your email" />
                </Grid>
                <Grid item sm={12} className='marginauto'>
                    <TextField label='Password' id="password" size="small" placeholder='Enter password' type='password' fullWidth />

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
                    <Button type='submit' onClick={() => onSubmit()} color='primary' variant="contained" fullWidth>Log in</Button>
                </Grid>


                <Grid item sm={12}>
                    <Button variant="outlined" fullWidth>
                        <FcGoogle size={24} />
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