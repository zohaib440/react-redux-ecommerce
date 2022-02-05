// handleCart is reducer, it is function which takes two parameters , currentState and action , check action type and update currentState accordingly

const products = [];

const handleCart = (currentState = products, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // check if action.payload Exist already
      const itemAlreadyExist = currentState.find(
        (product) => product.id === action.payload.id
      );
      if (itemAlreadyExist) {
        //   increase the quantity by 1, if the product we clicked is already exist
        return currentState.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [
          ...currentState,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
      break;

    case "DEL_ITEM":
      const itemAlreadyExist1 = currentState.find(
        (product) => product.id === action.payload.id
      );
      if (itemAlreadyExist1.quantity === 1) {
        return currentState.filter(
          (product) => product.id !== itemAlreadyExist1.id
        );
      } else {
        return currentState.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      }
      break;
    //   to remove all of same action.payload
    case "DEL_ALL":
      const itemAlreadyExist2 = currentState.find(
        (product) => product.id === action.payload.id
      );
      if (itemAlreadyExist2) {
        return currentState.filter(
          (product) => product.id !== itemAlreadyExist2.id
        );
      } else {
        return currentState.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: 0 }
            : product
        );
      }
      break;

    default:
      return currentState;
      break;
  }
};

export default handleCart;
