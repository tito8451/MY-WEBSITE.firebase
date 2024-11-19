const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log("donne l'info de ", stripe)

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const { amount } = JSON.parse(event.body); // Montant à facturer

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.error('Error creating payment intent:', error); // Log l'erreur
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
