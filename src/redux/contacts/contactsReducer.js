import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import ContactActions from "./contactsActions";

const onAdd = (state, action) => {
  if (
    state &&
    state.find((contact) => action.payload.contact.name === contact.name)
  ) {
    alert("Ops! This contact is in your list already!");
  } else {
    return [...state, action.payload.contact];
  }
};

const onDelete = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer([], {
  [ContactActions.addContact]: onAdd,
  [ContactActions.deleteContact]: onDelete,
});
const filter = createReducer("", {
  [ContactActions.setFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

//without toolkit
// import actionTypes from "../types";

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       if (
//         state &&
//         state.find((contact) => payload.contact.name === contact.name)
//       ) {
//         alert("Ops, you already have number with such name");
//         return state;
//       } else {
//         return [...state, payload.contact];
//       }

//     case actionTypes.DELETE:
//       return state.filter((contact) => contact.id !== payload.id);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionTypes.SET_FILTER:
//       return payload.filter;
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   items,
//   filter,
// });

// export default rootReducer;

//если с кнопки убрать disabled={!name.length || !number.length}, можно прописать условие
// else if (
//   action.payload.contact.name === "" ||
//   action.payload.contact.number === ""
// ) {
//   alert(`Please, field all fields`);
//   return state;
// }
