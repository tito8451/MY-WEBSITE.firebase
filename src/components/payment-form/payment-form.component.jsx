// import { useNavigate, useDispatch  } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector} from 'react-redux';

import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
// import { addOrder, clearCart } from '../../store/cart/cart.action';
import Modal from 'react-modal'; 
import { FormContainer } from './payment-form.styles';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentButton, PaymentFormContainer } from './payment-form.styles';
Modal.setAppElement('#root');
// {onPaymentSuccess}
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartItems = useSelector(selectCartItems); 
  // const dispatch = useDispatch();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // État de la modal
  const [paymentDetails, setPaymentDetails] = useState(null); // Détails du paiement
  // const navigate = useNavigate(); 

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8888/.netlify/functions';
  const paymentHandler = async (e) => {
    
    e.preventDefault();
  
    if (!stripe || !elements) {
      return; // Si Stripe ou Elements ne sont pas chargés
    }
  
    setIsProcessingPayment(true);
  
    try {
      console.log("Fetching from:", `${API_URL}`);
      //  || '/.netlify/functions/payment'
      const response = await fetch(`${API_URL}/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: amount * 100 }), // Montant en cents
      });
  
      const data = await response.json();
  console.log("data", data)
  if (!response.ok) {
    const errorData = await response.json(); // Récupérer l’erreur JSON envoyée par le serveur
    console.error("Response issue:", errorData);
    alert(`Payment failed: ${errorData.error}`);
}
      if (response.ok) {
        const clientSecret = data.paymentIntent.client_secret; // Assurez-vous que c'est le bon secret
        console.log("clientSecret", clientSecret)
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: currentUser ? currentUser.displayName : 'Client Anonyme',
            },
          },
        });
  
        setIsProcessingPayment(false);
  
        if (paymentResult.error) {
          alert(paymentResult.error.message);
        } else {
          if (paymentResult.paymentIntent.status === 'succeeded') {
          
            // onPaymentSuccess(cartItems, amount);
      
            alert('Payment Successful!');
            // Passer les articles et le montant à l'historique
            // console.log("navigation", navigate)
            // navigate('/checkout-validation');
            setPaymentDetails({ amount, items: cartItems }); // Mettre à jour les détails du paiement
            setIsModalOpen(true); // Ouvrir la modal
          }
        }
      } else {
        console.error(data.error);
        alert(`Payment failed: ${data.error}`);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      alert('Payment processing error. Please try again.');
    } finally {
      setIsProcessingPayment(false);
    }
  };
  useEffect(() => {
    Modal.setAppElement('#root'); // Définir l'élément racine ici, si nécessaire
  }, []);
  const closeModal = () => {
    setIsModalOpen(false); // Fermer la modal
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
       {/*Modal avec les détails du paiement */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Payment Successful!</h2>
        <p>Total: ${amount}</p> {/* Montant formaté */}
        <h3>Items Purchased:</h3>
        <ul>
          {paymentDetails && paymentDetails.items.map(item => (
            <li key={item.id}>{item.name} - ${item.price}</li> 
          ))}
        </ul>
        <PaymentButton onClick={closeModal}>Close</PaymentButton>
      </Modal> 
    </PaymentFormContainer>
  );
};

export default PaymentForm;
// import { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useSelector } from 'react-redux';
// import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector';
// import { selectCurrentUser } from '../../store/user/user.selector';
// // import { addOrder, clearCart } from '../../store/cart/cart.action';
// import { FormContainer, PaymentFormContainer, PaymentButton } from './payment-form.styles';
// import { BUTTON_TYPE_CLASSES } from '../button/button.component';

// const PaymentForm = ({ onPaymentSuccess }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   // const dispatch = useDispatch();
//   const cartItems = useSelector(selectCartItems); 
//   const amount = useSelector(selectCartTotal);
//   const currentUser = useSelector(selectCurrentUser);
//   const [isProcessingPayment, setIsProcessingPayment] = useState(false);

//   const paymentHandler = async (e) => {
//     e.preventDefault();
  
//     if (!stripe || !elements) {
//       return; // Si Stripe ou Elements ne sont pas chargés
//     }
  
//     setIsProcessingPayment(true);
  
//     try {
//       const response = await fetch('/.netlify/functions/payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ amount: amount * 100 }), // Montant en cents
//       });
  
//       const data = await response.json();
//       console.log("data", data);
//       if (response.ok) {
//         const clientSecret = data.paymentIntent.client_secret; 
//         const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//           payment_method: {
//             card: elements.getElement(CardElement),
//             billing_details: {
//               name: currentUser ? currentUser.displayName : 'Client Anonyme',
//             },
//           },
//         });
  
//         setIsProcessingPayment(false);
  
//         if (paymentResult.error) {
//           alert(paymentResult.error.message);
//         } else if (paymentResult.paymentIntent.status === 'succeeded') {
//           // Indiquer que le paiement a réussi
//           alert('Paiement réussi !'); // Notification du succès
          
//           // Passer les informations au gestionnaire de succès
//           onPaymentSuccess(cartItems, amount);
//         }
//       } else {
//         console.error(data.error);
//         alert(`Le paiement a échoué : ${data.error}`);
//       }
//     } catch (error) {
//       console.error("Erreur de fetch :", error);
//       alert('Erreur lors du traitement du paiement. Veuillez réessayer.');
//     } finally {
//       setIsProcessingPayment(false);
//     }
//   };
  

//   return (
//     <PaymentFormContainer>
//       <FormContainer onSubmit={paymentHandler}>
//         <h2>Paiement by Credit Card :</h2>
//         <CardElement />
//         <PaymentButton
//           buttonType={BUTTON_TYPE_CLASSES.inverted}
//           isLoading={isProcessingPayment}
//         >
//           Pay Now
//         </PaymentButton>
//       </FormContainer>
//     </PaymentFormContainer>
//   );
// };

// export default PaymentForm;
