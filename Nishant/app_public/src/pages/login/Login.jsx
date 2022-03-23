import { React, useState } from 'react';
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
    FormControl,
    InputLabel,
    OutlinedInput,
} from '@mui/material';



const Login = () => {

            // event handeler
            const [inputs, setInputs] = useState({});

            const handleChange = (event) => {
                const name = event.target.name;
                const value = event.target.value;
                setInputs(values => ({ ...values, [name]: value }))
            }
        
            const handleSubmit = (event) => {
                event.preventDefault();
                console.log(inputs);
            }

    return (
    
    <Grid className="logInform">
        <Grid container xs={4} className="logInform" spacing={2} Width={600} minWidth={300} >
            <Grid item sm={12}>
                <h2>
                    Log in to your account
                </h2>
            </Grid>
            <Grid item sm={12}>
                <p>Welcome back! Please enter your details.</p>
            </Grid>
            {/* Form */}
            <Grid item sm={12}>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item sm={12} className='marginauto'>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="component-outlined" 
                                    size="small">Email</InputLabel>
                                    <OutlinedInput
                                        onChange={handleChange}
                                        label="Email"
                                        size="small"
                                        type="email"
                                        name="email"
                                        value={OutlinedInput.email}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item sm={12} className='marginauto'>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="component-outlined" 
                                    size="small">Password</InputLabel>
                                    <OutlinedInput
                                        onChange={handleChange}
                                        label="Password"
                                        size="small"
                                        type="password"
                                        name="password"
                                        value={OutlinedInput.password}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </FormControl>
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
                                <Button type='submit'
                                    color='primary'
                                    variant="contained"
                                    fullWidth>Log in</Button>
                            </Grid>
                        </Grid>
                    </form>
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