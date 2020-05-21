const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET);
module.exports = async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1,
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
}