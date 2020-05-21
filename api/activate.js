const stripe = require("stripe")("sk_test_mOR7fRk8jd4IjQjtOiDY2NyB");
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