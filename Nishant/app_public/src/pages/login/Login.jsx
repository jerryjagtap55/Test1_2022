import React from 'react';
import './login.css';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';



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
                } else {
                    console.log("login unsuccess");
                }
            } else {
                console.log("email not found");
            }
        });


        //navigate to another page.
        window.location = '/';
    }
    const responseGoogle = (response) => {
        console.log(response.profileObj.email);


        axios({
            method: "POST",
            url: "http://localhost:4000/api/signin",
            data: { tokenId: response.tokenId }
        }).then(response => {
            console.log("google login success", response);
        });

        //navigate to another page.
        //   window.location = '/user';

    };



    return (


        <div className="logInform">
            <div className="logInform" spacing={2} width={600} minWidth={300} >
                <div >
                    <h2>
                        Log in to your account
                    </h2>
                </div>
                <div >
                    <p>Welcome back! Please enter your details.</p>
                </div>
                <div  className='marginauto'>
                    <input fullWidth id="email" size="small" label="Email" variant="outlined" placeholder="Please enter your email" />
                </div>
                <div  className='marginauto'>
                    <input label='Password' id="password" size="small" placeholder='Enter password' type='password' fullWidth />

                </div>
                <div  className='rememberstyle'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label class="form-check-label" for="flexCheckChecked">
                                Remember me
                            </label>
                    </div>
                    <a href="/" >
                        Forgot password?
                    </a>
                </div>
                <div  minWidth={250}>
                    <button className='btn btn-primary' type='submit' onClick={() => onSubmit()} color='primary' variant="contained" fullWidth>Log in</button>
                </div>


                <div >

                    <GoogleLogin
                        clientId="188636961924-aqg9ristkvg8mhba6hj8dpd3g7rqt0vc.apps.googleusercontent.com"
                        buttonText="login with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />


                </div>

                <div >
                    Don't have an account? &nbsp;
                    <a href="/signup" >
                        Sign Up
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Login;