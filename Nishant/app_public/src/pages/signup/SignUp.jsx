import React from 'react';
import './signup.css';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

// MUI
import {
    Grid,
    TextField,
    Link, 
    Button,
} from '@mui/material';

const SignUp = () => {
     function onSubmit(){
         var firstName = document.getElementById('firstName').value;
         var lastName = document.getElementById('lastName').value;
         var email = document.getElementById('email').value;
         var password = document.getElementById('password').value;

         const registered = {
            firstName,
            lastName,
            email,
            password
        }

        axios.post("http://localhost:4000/app/signup", registered)
            .then(response => console.log(response.data))
        
        //navigate to another page.
        window.location = './'
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
              <Grid item sm={12} className='marginauto'>
                  <TextField fullWidth id="firstName" name="firstName"  size="small" label="First Name" variant="outlined" placeholder="Enter your First name " />
              </Grid>
              <Grid item sm={12} className='marginauto'>
                  <TextField fullWidth id="lastName" name="lastName"  size="small" label="Last Name" variant="outlined" placeholder="Enter your Last name"  />
              </Grid>
              <Grid item sm={12} className='marginauto'>
                  <TextField fullWidth id="email" name="email"  size="small" label="Email" variant="outlined" placeholder="Enter your email"  />
              </Grid>
  
              <Grid item sm={12} className='marginauto'>
                  <TextField id="password" label='Password' size="small"  name="password"  placeholder='Create a password' type='password' fullWidth />
                  
              </Grid>
              <Grid item sm={12} minWidth={250}>
                  <Button type='submit' onClick={() => onSubmit()} color='primary' variant="contained" fullWidth>Get started</Button>
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
    );
      
}








export default SignUp