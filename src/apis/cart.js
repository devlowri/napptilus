export const CartAPI = {
  addProductToCart: async (id, colorCode, storageCode) => {
    const cart = await fetch('https://itx-frontend-test.onrender.com/api/cart', {
      method: 'POST',
      body: {
        id: id,
        colorCode: colorCode,
        storageCode: storageCode
      }
    })
      .then((response) => response.json())
      .then((data) => data);
    return cart;
  }
};
