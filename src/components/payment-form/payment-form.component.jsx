// src/components/payment-form/PaymentForm.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { selectCurrentUser } from "/src/store/user/user.selector.jsx";
import { selectCartTotal } from "/src/store/cart/cart.selector.jsx";
import { BUTTON_TYPE_CLASSES } from "/src/components/button/button.component.jsx";
import { processPayment } from "./payment-utils";
import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles.jsx";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);
    const result = await processPayment(stripe, elements, amount, currentUser);
    setIsProcessingPayment(false);

    if (result.error) {
      alert(result.error);
    } else {
      alert("Payment successful");
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
          disabled={!stripe}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
