import { createContext, useState } from 'react';

export const CartContext = createContext({
  count: 0
});

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = (value) => {
    setCount(count + value);
  };

  return <CartContext.Provider value={{ count, incrementCount }}>{children}</CartContext.Provider>;
};
