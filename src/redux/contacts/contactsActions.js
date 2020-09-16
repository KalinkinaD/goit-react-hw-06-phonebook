import { v4 as uuid } from "uuid";
import { createAction } from "@reduxjs/toolkit";
// import contactsActionTypes from "../types";

const addContact = createAction("contact/add", (name, number) => ({
  payload: {
    contact: { id: uuid(), name: name, number: number },
  },
}));

const deleteContact = createAction("contact/delete");
const setFilter = createAction("contact/filter");

// const deleteContact = (contactId) => ({
//   type: contactsActionTypes.DELETE,
//   payload: { id: contactId },
// });

// const setFilter = (filter) => ({
//   type: contactsActionTypes.SET_FILTER,
//   payload: { filter },
// });

// const showAlert = (message) => ({
//   type: contactsActionTypes.SET_FILTER,
//   payload: {
//     message,
//   },
// });

export default { addContact, deleteContact, setFilter };
