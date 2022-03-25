import { React, useState } from 'react';
import './signup.css';

import { FcGoogle } from 'react-icons/fc';

// MUI
import {
    Grid,
    Link,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
} from '@mui/material';

const SignUp = () => {


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
            <Grid container xs={4} className="logInform" spacing={2} Width={600} minWidth={250}>
                <Grid item sm={12}>
                    <h2>
                        Create an account
                    </h2>
                </Grid>
                <Grid item sm={12}>
                    <p>Start your journey!</p>
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
                                        size="small">First Name</InputLabel>
                                    <OutlinedInput
                                        onChange={handleChange}
                                        label="FirstName"
                                        size="small"
                                        name="firstname"
                                        value={OutlinedInput.firstname}
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item sm={12} className='marginauto'>

                                <FormControl fullWidth>
                                    <InputLabel htmlFor="component-outlined" 
                                    size="small">Last Name</InputLabel>
                                    <OutlinedInput
                                        onChange={handleChange}
                                        label="LastName"
                                        size="small"
                                        name="lastname"
                                        value={OutlinedInput.lastname}
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </FormControl>
                            </Grid>
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
                            <Grid item sm={12} minWidth={250}>
                                <Button type='submit'
                                    color='primary'
                                    variant="contained"
                                    fullWidth>Get started</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

                <Grid Item sm={12}>
                    <h5>Or</h5>
                </Grid>

                <Grid item sm={12}>
                    <Button variant="outlined" fullWidth>
                        <FcGoogle size={24} />
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