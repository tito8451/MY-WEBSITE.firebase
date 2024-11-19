const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(functions.config().stripe.key); // Utiliser la clé configurée

admin.initializeApp();

exports.createPaymentIntent = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Method not allowed' });
  }

  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.status(200).send({ paymentIntent });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: error.message });
  }
});
