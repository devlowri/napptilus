import { API_URL } from '.';

export const ProductAPI = {
  getProducts: async () => {
    const products = await fetch(`${API_URL}/product`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => data);
    return products;
  },
  getProductDetails: async (productId) => {
    const productDetails = await fetch(`${API_URL}/product/${productId}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => data);
    return productDetails;
  }
};
