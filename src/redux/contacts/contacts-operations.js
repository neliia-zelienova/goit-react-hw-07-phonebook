import axios from "axios";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

const doesContactExist = (contacts, name) => {
  if (contacts && contacts.find((contact) => contact.name === name))
    return true;
  return false;
};

export const getContacts = () => (dispatch) => {
  dispatch(getContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch((error) => dispatch(getContactsError(error)));
};

export const addContact = (name, number) => (dispatch, getState) => {
  const { contacts } = getState();
  if (!doesContactExist(contacts.contacts, name)) {
    dispatch(addContactRequest());
    axios
      .post("/contacts", { name, number })
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error)));
  } else alert(`${name} is already in contacts`);
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};
