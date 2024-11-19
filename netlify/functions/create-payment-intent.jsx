const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { amount } = JSON.parse(event.body);
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }
};

