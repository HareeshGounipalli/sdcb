let cart = [];

export const USE_MOCK = true;

export const fetchCartAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...cart]);
    }, 300);
  });
};

export const addToCartAPI = (item) => {
  return new Promise((resolve) => {
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    setTimeout(() => resolve([...cart]), 300);
  });
};

export const removeFromCartAPI = (item) => {
  return new Promise((resolve) => {
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity -= 1;
      if (existing.quantity <= 0) {
        cart = cart.filter((i) => i.id !== item.id);
      }
    }
    setTimeout(() => resolve([...cart]), 300);
  });
};
