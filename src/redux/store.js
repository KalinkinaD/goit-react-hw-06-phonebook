import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./contacts/contactsReducer";

const rootReducer = combineReducers({
  contacts: Reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

//without toolkit
// import { createStore } from "redux";
// import rootReducer from "./contacts/contactsReducer";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
