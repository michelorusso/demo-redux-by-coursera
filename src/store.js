import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Components/CartSlice";

// Importa configureStore e Reducer:
//     Il codice importa la funzione configureStore da @reduxjs/toolkit, utilizzata per creare il negozio Redux.
//     Importa anche la funzione reducer, cartReducer, dal file CartSlice, assumendo che tu abbia uno slice per gestire lo stato del carrello definito nel file.
// Configurazione del Negozio:
//     configureStore viene invocato con un oggetto contenente le opzioni di configurazione del negozio.
//     La proprietà reducer è specificata come un oggetto in cui ogni chiave rappresenta uno slice di stato e ogni valore rappresenta la corrispondente funzione reducer.
//     In questo caso, il cartReducer è associato allo slice di stato del carrello. Questo significa che lo stato gestito dal cartReducer sarà memorizzato sotto la chiave cart nel negozio Redux.
// Altre Opzioni di Configurazione del Negozio:
//     Opzioni di configurazione aggiuntive per il negozio possono essere incluse nell’oggetto passato a configureStore.
//     Ad esempio, puoi includere middleware, miglioramenti o altre opzioni come la configurazione degli strumenti di sviluppo.
// Esportazione del negozio:
//     Infine, il negozio Redux configurato (store) è esportato dal modulo, rendendolo disponibile per l’uso in tutta l’applicazione.

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
