const sayHelloReducer = (state = {}, action) => {
  switch (action.type) {
    case "SAY_HELLO":
      return { ...state, message: "Hello you welcome to barefoot normad." };
    case "HOME_PAGE_LOADED":
      return { ...state, welcome: "Hey the home page loaded successfully." };
    default:
      return state;
  }
};

export default sayHelloReducer;
