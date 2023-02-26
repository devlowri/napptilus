export const ProductAPI = {
  getProducts: async () => {
    const products = await fetch('https://itx-frontend-test.onrender.com/api/product', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => data);
    return products;
  },
  getProductDetails: async (productId) => {
    const productDetails = await fetch(
      `https://itx-frontend-test.onrender.com/api/product/${productId}`,
      { method: 'GET' }
    )
      .then((response) => response.json())
      .then((data) => data);
    return productDetails;
  }
};
