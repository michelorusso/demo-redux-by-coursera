import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "./CartSlice"; // Presumendo che tu abbia creatori di azioni per aumentare e diminuire la quantità dell'articolo
import "./ShoppingCart.css"; // Importa il file CSS per gli stili specifici del componente

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <>
      <div className="shopping-cart">
        <h2 className="shopping-cart-title">Carrello</h2>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} - ${item.price}
              </span>
              <div className="quantity-controls">
                <button
                  className="quantity-control-btn"
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <span> {item.quantity}</span>
                <button
                  className="quantity-control-btn"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <button
                className="remove-item-btn"
                onClick={() => handleRemoveItem(item.id)}
              >
                Rimuovi
              </button>
            </li>
          ))}
        </ul>
        <button className="clear-cart-btn" onClick={handleClearCart}>
          Svuota Carrello
        </button>
      </div>
      <div>
        {totalAmount ? <div>'L'importo totale è {totalAmount}</div> : ""}
      </div>
    </>
  );
};

export default ShoppingCart;
