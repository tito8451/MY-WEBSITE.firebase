import { useSelector } from 'react-redux';
import { selectRecentOrder } from '../../store/cart/cart.selector';
const CheckoutValidationPayment = () => {
    const recentOrder = useSelector(selectRecentOrder);
    console.log("recentOrder", recentOrder);
    const { items = [], total = 0, date = new Date().toISOString() } = recentOrder || {};
  
    return (
      <div>
        <h2>Merci pour votre achat !</h2>
        <p>Date de commande: {new Date(date).toLocaleString()}</p>
        <h3>Total: ${(total / 100).toFixed(2)}</h3>
        <h3>Articles achetés :</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name} - ${(item.price / 100).toFixed(2)} (x{item.quantity})</li>
          ))}
        </ul>
      </div>
    );
  };
  export default CheckoutValidationPayment;