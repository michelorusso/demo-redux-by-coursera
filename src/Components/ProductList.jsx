import React from "react"; // Importa i hook da React Redux
import { useDispatch, useSelector } from "react-redux"; //// Importa il file CSS per lo stile
import { addItemToCart } from "./CartSlice"; // Creatore di azioni
import "./ProductList.css"; // Stili CSS

const ProductList = () => {
  // Inizializza la funzione dispatch per inviare azioni allo store Redux
  const dispatch = useDispatch();

  // Accedi agli attuali articoli del carrello dallo stato globale di Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Elenco di esempio di prodotti
  const products = [
    { id: 1, name: "Prodotto A", price: 60 },
    { id: 2, name: "Prodotto B", price: 75 },
    { id: 3, name: "Prodotto C", price: 30 },
  ];

  // Funzione per gestire l'aggiunta di un prodotto al carrello
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product)); // Invia l'azione per aggiungere il prodotto al carrello
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Prodotti</h2>
      <ul className="product-list-items">
        {products.map((product) => {
          const isAlreadyInCart = cartItems.some(
            (item) => item.id === product.id
          ); // Controlla se il prodotto è già nel carrello

          return (
            <li key={product.id} className="product-list-item">
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                className={`add-to-cart-btn ${
                  isAlreadyInCart ? "disabled" : ""
                }`}
                onClick={() => handleAddToCart(product)}
                disabled={isAlreadyInCart} // Disabilita il pulsante se già aggiunto
              >
                {isAlreadyInCart ? "Aggiunto" : "Aggiungi al carrello"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
