import { API_URL } from '.';

export const CartAPI = {
  addProductToCart: async (id, colorCode, storageCode) => {
    const cart = await fetch(`${API_URL}/cart`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        colorCode,
        storageCode
      })
    })
      .then((response) => response.json())
      .then((data) => data);
    return cart;
  }
};
