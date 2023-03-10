export let initialState = {
  amount: 100
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_AMOUNT":
      return {
        ...state,
        amount: action.amount + state.amount
      };

    case "DECREMENT_AMOUNT":
      return {
        ...state,
        amount: state.amount - action.amount
      };

    default:
      return state;
  }
}

export default reducer;
