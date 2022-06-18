import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

export const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.item];
    case ACTIONS.REMOVE:
      const newArr = [...state];
      newArr.splice(action.index, 1);

      return newArr;
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default function Cart() {
  return <div>Cart</div>;
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
