import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactsError = createAction('contacts/fetchContactError');

const createContactsRequest = createAction('contacts/createContactRequest');
const createContactsSuccess = createAction('contacts/createContactSuccess');
const createContactsError = createAction('contacts/createContactError');

const removeContactsRequest = createAction('contacts/removeContactRequest');
const removeContactsSuccess = createAction('contacts/removeContactSuccess');
const removeContactsError = createAction('contacts/removeContactError');

const changeFilter = createAction('CHANGE_FILTER');

const getFiltredContacts = createAction('GET_FILTRED_CONTACTS');

const actions = {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  createContactsRequest,
  createContactsSuccess,
  createContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  changeFilter,
  getFiltredContacts,
};

export default actions;
