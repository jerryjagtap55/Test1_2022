import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

// Actions
import { login, skipLogin } from '../../actions/auth';
import { setAlert, removeAlert } from '../../actions/alert';
// Files
import Alert from '../../components/Alert';
// MUI
import {
    Grid,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
} from '@mui/material';



const Login = ( props ) => {

    // event handeler
    const [ formData, setForm ] = useState( {
        email: '',
        password: '',
    } );

    const { email, password } = formData;

    const onChange = ( e ) => {
        // e.preventDefault();
        setForm( {
            ...formData,
            [ e.target.name ]: e.target.value,
        } );
    };

    const onSubmit = async ( e ) => {
        e.preventDefault();
        props.login( email, password );
    };

    // If already auth, redirect to dashboard
    if ( props.isAuthenticated ) {
        return <Navigate to='/' />;
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
                <Alert />

                <form onSubmit={( e ) => {
                    onSubmit( e );
                }}>
                    <Grid item sm={12} className='marginauto'>
                        <TextField fullWidth id="email"
                            name='email'
                            value={email}
                            onChange={( e ) => {
                                onChange( e );
                            }}
                            size="small" label="Email" variant="outlined" placeholder="Please enter your email" />
                    </Grid>
                    <Grid item sm={12} className='marginauto'>
                        <TextField label='Password'
                            value={password}
                            onChange={( e ) => {
                                onChange( e );
                            }}
                            id="password" size="small" placeholder='Enter password' name='password' type='password' fullWidth />

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
                        <Link to="#" >
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item sm={12} minWidth={250}>
                        <Button type='submit' color='primary' variant="contained" fullWidth>Log in</Button>
                    </Grid>
                </form>


                {/*  <Grid item sm={12}>

                    <GoogleLogin
                        clientId="188636961924-aqg9ristkvg8mhba6hj8dpd3g7rqt0vc.apps.googleusercontent.com"
                        buttonText="login with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />


                </Grid> */}

                <Grid item sm={12}>
                    Don't have an account? &nbsp;
                    <Link to="/signup" >
                        Sign Up
                    </Link>
                </Grid>
            </Grid>
        </Grid>

    );
};
const mapStateToProps = ( state ) => ( {
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
    alerts: state.alert,
} );

export default connect( mapStateToProps, { login, skipLogin, setAlert, removeAlert } )( Login );