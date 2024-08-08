
/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

function CartReducer(state, action) {
  switch (action.type) {
    case "Add":
      return [...state, action.data];
    case "Increase": {
      return state.map(item =>
        item.Id === action.data && item.Quantity < 10
          ? { ...item, Quantity: item.Quantity + 1 }
          : item
      );
    }
    case "Decrease": {
      return state.map(item =>
        item.Id === action.data && item.Quantity > 1
          ? { ...item, Quantity: item.Quantity - 1 }
          : item
      );
    }
    case "Remove": {
      return state.filter(item => item.Id !== action.data)
    }
    
    default:
      return state;
  }
}

function ContextProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function UseCart() {
  const Context = useContext(CartContext);
  if (Context === undefined)
    throw new Error("Context was used in a wrong place");
  return Context;
}

export { ContextProvider, UseCart };

