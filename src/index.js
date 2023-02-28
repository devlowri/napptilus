// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './providers/cart';
import { SelectedProductProvider } from './providers/selectedProduct';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <SelectedProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </SelectedProductProvider>
  // </React.StrictMode>
);
