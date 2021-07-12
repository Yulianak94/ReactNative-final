// unique identifier:
export const TOGGLE_ADD = "TOGGLE_ADD";
export const toggleAdd = (id) => {
  return { type: TOGGLE_ADD, productId: id };
};


export const TOGGLE_DELETE= "TOGGLE_DELETE";
export const toggleDelete = (id) => {
  return { type: TOGGLE_DELETE, productId: id };
};

export const ADD_QTY= "ADD_QTY";
export const addQty = (id) => {
  return { type: ADD_QTY, productId: id };
};

export const LESS_QTY= "LESS_QTY";
export const lessQty = (id) => {
  return { type: LESS_QTY, productId: id };
};
