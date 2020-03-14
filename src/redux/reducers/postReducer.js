const initialState = {
  prod_img: "",
  prod_name: "",
  price: null,
  prod_description: ""
};

const POST_TO_REDUCE = "POST_TO_REDUCE";

export function postToReduce(prod_img, prod_name, price, prod_description) {
  let action = {
    type: POST_TO_REDUCE,
    payload: { prod_img, prod_name, price, prod_description }
  };
  return action;
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case POST_TO_REDUCE:
      console.log(action);
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
