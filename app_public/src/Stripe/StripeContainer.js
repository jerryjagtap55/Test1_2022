import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51KkK9ZH07BMiy7OCN0ahqvDrdO1PhbVXGEPoxQPVP0Nj2fOcRhBa4kxRNgxP3cYwrD9RdrUGukTmJ2Y9hUNTSn2x007BjWBKNP";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;