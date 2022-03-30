const express = require('express')
const router = express.Router()
const sellSchemaCopy = require('../models/sellSchema')

router.post('/sell', async (request,response) => {
        
    sellDataDetails = new sellSchemaCopy({

            userName:request.body.userName,
            artName:request.body.artName,
            artDesc:request.body.artDesc,
            bidstartPrice:request.body.bidstartPrice,
            artImage:request.body.artImage
    });

        sellDataDetails.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
});
