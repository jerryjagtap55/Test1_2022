const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodel')

router.post('/signup', async (request,response) => {

    let signedUpUser = await signUpTemplateCopy.findOne({email: request.body.email});
    if(signedUpUser){
        return response.status(400).send('That user already exists.!');
    }
    else{
        signedUpUser = new signUpTemplateCopy({

            firstName:request.body.firstName,
            lastName:request.body.lastName,
            email:request.body.email,
            password:request.body.password
    
    });
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
}
});

router.get('/signin',  async (request,response) =>{
    let signedUpUser = await signUpTemplateCopy.findOne({email: request.query.email});
    console.log(signedUpUser);
    response.send(signedUpUser);                                                                                                                                                                                                          
});
module.exports = router