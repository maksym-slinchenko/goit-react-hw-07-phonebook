import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';

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
  // changeFilter,
  // getFiltredContacts,
} = actions;

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [createContactsSuccess]: (state, { payload }) => [...state, payload],
  [removeContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.getFiltredContacts]: state =>
    state.filter(contact => contact.name.toLowerCase()),
});

const filter = createReducer('', {
  [actions.changeFilter]: (state = '', action) => action.payload,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [createContactsRequest]: () => true,
  [createContactsSuccess]: () => false,
  [createContactsError]: () => false,
  [removeContactsRequest]: () => true,
  [removeContactsSuccess]: () => false,
  [removeContactsError]: () => false,
});

export default combineReducers({ contacts, filter, loading });
