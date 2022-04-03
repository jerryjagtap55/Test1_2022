const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('../routes/register')
const sellUrls = require('../routes/sell')
const cors = require('cors')


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config();
const stripe = require("stripe")("sk_test_51KkK9ZH07BMiy7OCyjSTbVgTau3BGBS2o6eVSigufaeOE8ogma7phEJMipdUnmZGxVyzYP0W0KVGSnuOFusM9cGI00uNJYsukZ");

mongoose.connect("mongodb+srv://admin:pass@cluster0.svy4o.mongodb.net/DigiArt?retryWrites=true&w=majority", () => console.log("Database connected..!!"))

app.use(express.json())
app.use(cors())
// append server.js to routes.js
app.use('/app', routesUrls)
app.use('/app', sellUrls)


app.post("/stripe/charge", cors(), async (req, res) => {
    console.log("stripe-routes.js 9 | route reached", req.body);
    let { amount, id } = req.body;
    console.log("stripe-routes.js 10 | amount and id", amount, id);
    try {
      const payment = await stripe.paymentIntents.create({
        amount: amount,
        currency: "USD",
        description: "Your Company Description",
        payment_method: id,
        confirm: true,
      });
      console.log("stripe-routes.js 19 | payment", payment);
      res.json({
        message: "Payment Successful",
        success: true,
      });
    } catch (error) {
      console.log("stripe-routes.js 17 | error", error);
      res.json({
        message: "Payment Failed",
        success: false,
      });
    }
  });


app.listen(4000, () => console.log("Server is up and running"))