const express = require('express')
const router = express.Router()
const sellSchemaCopy = require('../models/product')

router.post('/sell', async (request,response) => {
        
    sellDataDetails = new sellSchemaCopy({

            name:request.body.name,
            description:request.body.description,
            Image:request.body.Image,
            category:request.body.category,
            biding_start_price:request.body.biding_start_price,
            user_date:request.body.user_date
    });

        sellDataDetails.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
});
module.exports = router
