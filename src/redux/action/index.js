// Action is a function which return object containing type and payload
// Add item to cart

export const addItem = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};

// to delete item from cart
export const delItem = (product) => {
  return {
    type: "DEL_ITEM",
    payload: product,
  };
};

// to delete all products of same type
export const delAll = (product) => {
  return {
    type: "DEL_ALL",
    payload: product,
  };
};
