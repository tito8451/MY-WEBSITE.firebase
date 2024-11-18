// src/components/payment-form/payment-utils.js
import { CardElement } from "@stripe/react-stripe-js";

export const processPayment = async (stripe, elements, amount, currentUser) => {
  try {
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment intent');
    }

    const { clientSecret } = await response.json();

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
          email: currentUser ? currentUser.email : "guest@example.com",
        },
      },
    });

    if (paymentResult.error) {
      throw new Error(paymentResult.error.message);
    }

    if (paymentResult.paymentIntent.status === "succeeded") {
      return { success: true };
    } else {
      throw new Error("Payment failed");
    }
  } catch (error) {
    console.error("Payment error:", error);
    return { error: error.message };
  }
};
