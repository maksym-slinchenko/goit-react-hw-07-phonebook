import axios from 'axios';

import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  createContactsRequest,
  createContactsSuccess,
  createContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  //   changeFilter,
  //   getFiltredContacts,
} = actions;

// Добавление контактов на api-server
const createContact = (name, number) => dispatch => {
  const contact = { name, number };
  dispatch(createContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(createContactsSuccess(data)))
    .catch(error => dispatch(createContactsError(error)));
};

// Получение списков контактов с api-server
const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

// Удаление контактов из api-server
const removeContact = contactId => dispatch => {
  dispatch(removeContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(removeContactsSuccess(contactId)))
    .catch(error => dispatch(removeContactsError(error)));
};

const operations = {
  fetchContacts,
  createContact,
  removeContact,
};

export default operations;
