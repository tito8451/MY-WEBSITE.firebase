import { loadStripe } from "@stripe/stripe-js";
var stripe = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
export const stripePromise = loadStripe(stripe);
