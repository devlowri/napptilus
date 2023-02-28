import { createContext, useState } from 'react';
import { ProductAPI } from '../apis/product';

export const SelectedProductContext = createContext({
  selectedProduct: null,
  loading: false
});

export const SelectedProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAndSetSelectedProduct = async (productId) => {
    setLoading(true);
    const productDetails = await ProductAPI.getProductDetails(productId);
    setLoading(false);
    setSelectedProduct(productDetails);
  };

  return (
    <SelectedProductContext.Provider
      value={{ selectedProduct, fetchAndSetSelectedProduct, loading }}>
      {children}
    </SelectedProductContext.Provider>
  );
};
