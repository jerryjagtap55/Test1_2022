import React from 'react';
import './signup.css';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const SignUp = () => {
    function onSubmit () {
        var firstName = document.getElementById( 'firstName' ).value;
        var lastName = document.getElementById( 'lastName' ).value;
        var email = document.getElementById( 'email' ).value;
        var password = document.getElementById( 'password' ).value;

        const registered = {
            firstName,
            lastName,
            email,
            password
        };

        axios.post( "http://localhost:4000/app/signup", registered )
            .then( response => console.log( response.data ) );

        //navigate to another page.
        window.location = './login';


    }
    const responseGoogle = ( response ) => {
        console.log( response.profileObj.email );


        axios( {
            method: "POST",
            url: "http://localhost:4000/api/signup",
            data: { tokenId: response.tokenId }
        } ).then( response => {
            console.log( "google login success", response );
        } );

        //navigate to another page.
        window.location = '/user';

    };
    return (
        <div className="logInform"  >
            <div className="logInform" spacing={2} width={600} minWidth={300}>
                <div>
                    <h2>
                        Create an account
                    </h2>
                </div>
                <div>
                    <p>Start your journey!</p>
                </div>
                <div className='marginauto'>
                    <label htmlFor="firstName">First Name:</label>
                    <input id="firstName" name="firstName" placeholder="Enter your First name " />
                </div>
                <div className='marginauto'>
                <label htmlFor="lastName">Last Name:</label>
                    <input id="lastName" name="lastName"  placeholder="Enter your Last name" />
                </div>
                <div className='marginauto'>
                    <label htmlFor="email">Email: </label>
                    <input id="email" name="email"  type='email' placeholder="Enter your email" />
                </div>

                <div className='marginauto'>
                    <input id="password" name="password" placeholder='Create a password' type='password' />

                </div>
                <div minWidth={250}>
                    <button className='btn btn-primary' type='submit' onClick={() => onSubmit()} color='primary'>Get started</button>
                </div>


                <div>
                    <GoogleLogin
                        clientId="188636961924-aqg9ristkvg8mhba6hj8dpd3g7rqt0vc.apps.googleusercontent.com"
                        buttonText="Sign up with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>

                <div>
                    Already have an account? &nbsp;
                    <a href="/login" >
                        Log In
                    </a>
                </div>
            </div>
        </div>
    );

};








export default SignUp;