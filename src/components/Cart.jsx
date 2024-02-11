import { useContext } from "react";
import { CartContext } from "./cartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";

export default function Cart({ onClose, onCheckout }) {

  const { items, totalAmount, addToCart } = useContext(CartContext);

  return (
    <div className="cart">

      <h2>Your Cart</h2>

      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="cart-item"
          >
            <p><b>{item.name}</b> - {item.count} x {currencyFormatter.format(item.price)}</p>

            <span className="cart-item-actions">
              <button onClick={()=>addToCart(item, '-')}>-</button>{item.count}<button onClick={()=>addToCart(item)}>+</button>
            </span>

          </li>))}
      </ul>

      <div className="cart-total">
        <p>{currencyFormatter.format(totalAmount)}</p>
      </div>

      <div className="modal-actions">
        <button className='text-button' onClick={onClose}>
          Close
        </button>
        <Button onClick={onCheckout}>Go to Checkout</Button>
      </div>


    </div>
  );
};


