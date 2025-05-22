import { createSlice } from "@reduxjs/toolkit";

// Una slice è un pezzo autonomo di stato globale e la logica che lo gestisce, tutto definito in un singolo file.
// Chiami createSlice con un oggetto contenente le opzioni di configurazione per il tuo slice.
// Le opzioni di configurazione includono:
// ***name: Un valore stringa che rappresenta il nome del tuo slice. Viene utilizzato internamente da Redux Toolkit per il prefisso dei tipi di azione e altri scopi.
// ***initialState: Un oggetto che rappresenta lo stato iniziale del tuo slice.
// ***reducers: Un oggetto contenente le funzioni reducer. Ogni coppia chiave-valore rappresenta un singolo reducer, dove la chiave è il nome dell’azione e il valore è la funzione reducer.

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // * addItemToCart:
    // Questa funzione reducer gestisce l’azione di aggiungere un articolo al carrello.
    // Prende due parametri: state (stato attuale della slice) e action (l’azione dispatchata contenente il payload).
    // Controlla prima se l’articolo esiste già nel carrello cercando il suo ID all’interno di state.cartItems.
    // Se l’articolo esiste (existingItem è true), aumenta la quantità dell’articolo esistente nel carrello di 1.
    // Se l’articolo non esiste nel carrello, lo aggiunge all’array cartItems con una quantità di 1.
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    // * removeItemFromCart:
    // Questa funzione reducer gestisce l’azione di rimuovere un articolo dal carrello.
    // Prende due parametri: state e action.
    // Aggiorna l’array cartItems filtrando l’articolo con l’ID fornito nel payload dell’azione
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // * clearCart:
    // Questa funzione reducer gestisce l’azione di svuotare l’intero carrello.
    // Prende solo il parametro state.
    // Imposta l’array cartItems su un array vuoto, svuotando di fatto tutti gli articoli dal carrello.
    clearCart(state) {
      state.cartItems = [];
    },

    // * increaseItemQuantity:
    // Questa funzione reducer gestisce l’azione di aumentare la quantità di un articolo specifico nel carrello.
    // Prende due parametri: state e action.
    // state: Questo rappresenta lo stato attuale dello store Redux. Include tipicamente i dati rilevanti per l’applicazione.
    // action: Questo è un oggetto che descrive l’azione che è avvenuta. Le azioni Redux sono oggetti JavaScript semplici che devono avere una proprietà type che indica il tipo di azione eseguita.0
    //         Inoltre, possono contenere dati aggiuntivi necessari per eseguire l’azione. In questo caso, action.payload probabilmente contiene l’identificatore (id) dell’articolo di cui si deve aumentare la quantità.
    // La logica della funzione:
    // Trova l’articolo nel carrello il cui identificatore (id) corrisponde all’identificatore passato nel payload dell’azione.
    // Se l’articolo viene trovato (itemToIncrease non è undefined), incrementa la proprietà quantità di quell’articolo di 1.
    increaseItemQuantity(state, action) {
      const itemToIncrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },

    // * decreaseItemQuantity:
    // Questa funzione reducer gestisce l’azione di diminuire la quantità di un articolo specifico nel carrello.
    // Prende due parametri: state e action.
    // state: Questo rappresenta lo stato attuale dello store Redux, tipicamente contenente tutti i dati rilevanti per l’applicazione.
    // action: Simile alla funzione precedente, è un oggetto che descrive l’azione eseguita. Si prevede che abbia una proprietà type che indica il tipo di azione e può includere dati aggiuntivi necessari per eseguire l’azione.
    // Qui, action.payload probabilmente contiene l’identificatore (id) dell’articolo di cui si deve diminuire la quantità.
    // La logica della funzione:
    // Tenta di trovare l’articolo nel carrello il cui identificatore (id) corrisponde all’identificatore fornito nel payload dell’azione.
    // Se l’articolo viene trovato (itemToDecrease non è undefined) e la sua quantità è maggiore di 1, decrementa la proprietà quantità di quell’articolo di 1.
    decreaseItemQuantity(state, action) {
      const itemToDecrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
  },
});

// createSlice restituisce un oggetto contenente i creatori di azioni generati e la funzione reducer.
// Puoi quindi esportare questi creatori di azioni e la funzione reducer da utilizzare nella configurazione del tuo store Redux e in tutta la tua applicazione.
export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
