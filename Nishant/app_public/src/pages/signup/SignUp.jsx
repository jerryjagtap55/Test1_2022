import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import './signup.css';

// MUI
import {
    Grid,
    TextField,
    Button,
} from '@mui/material';

// Actions
import { setAlert } from '../../actions/alert';
import { removeAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
// Files



const SignUp = ( props ) => {

    const [ formData, setForm ] = useState( {
        name: '',
        email: '',
        password: '',
        password2: '',
    } );

    const { name, email, password, password2 } = formData;
    const onChange = ( e ) => {
        // e.preventDefault();
        setForm( {
            ...formData,
            [ e.target.name ]: e.target.value,
        } );
    };

    const onSubmit = async ( e ) => {
        e.preventDefault();
        if ( password !== password2 ) {
            props.setAlert( 'Passwords do not match', 'error' );
        } else {
            props.register( { name, email, password } );
        }
    };

    // If already auth, redirect to dashboard
    if ( props.isAuth ) {
        return <Navigate to='/' />;
    }

    return (
        <Grid className="logInform"  >
            <Grid item container xs={4} className="logInform" spacing={2} width={600} minWidth={300}>
                <Grid item sm={12}>
                    <h2>
                        Create an account
                    </h2>
                </Grid>
                <Grid item sm={12}>
                    <p>Start your journey!</p>
                </Grid>
                <form

                    onSubmit={( e ) => {
                        onSubmit( e );
                    }}>

                    <Grid item sm={12} className='marginauto'>
                        <TextField fullWidth id="username"
                            value={name}
                            onChange={( e ) => {
                                onChange( e );
                            }}
                            name="username" size="small" label="First Name" variant="outlined" placeholder="Enter your First name " />
                    </Grid>

                    <Grid item sm={12} className='marginauto'>
                        <TextField fullWidth id="email"
                            name="email"
                            value={email}
                            onChange={( e ) => {
                                onChange( e );
                            }}

                            size="small" label="Email" variant="outlined" placeholder="Enter your email" />
                    </Grid>

                    <Grid item sm={12} className='marginauto'>
                        <TextField id="password" label='Password'
                            value={password}
                            onChange={( e ) => {
                                onChange( e );
                            }}

                            size="small" name="password" placeholder='Create a password' type='password' fullWidth />

                    </Grid>
                    <Grid item sm={12} className='marginauto'>
                        <TextField
                            size='small'
                            variant='outlined'
                            type='password'
                            placeholder='Confirm Password'
                            name='password2'
                            minLength='6'
                            value={password2}
                            onChange={( e ) => {
                                onChange( e );
                            }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={12} minWidth={250}>
                        <Button type='submit' color='primary' variant="contained"
                            value='Register'
                            fullWidth>Get started</Button>
                    </Grid>


                </form>


                {/* <Grid item sm={12}>
                    <GoogleLogin
                        clientId="188636961924-aqg9ristkvg8mhba6hj8dpd3g7rqt0vc.apps.googleusercontent.com"
                        buttonText="Sign up with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </Grid> */}

                <Grid item sm={12}>
                    Already have an account? &nbsp;
                    <Link to="/login" >
                        Log In
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );

};


SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuth: PropTypes.bool,
};

const mapStateToProps = ( state ) => ( {
    isAuth: state.auth.isAuthenticated,
    loading: state.auth.loading,
    alerts: state.alert,
} );



export default connect( mapStateToProps, { setAlert, removeAlert, register } )( SignUp );