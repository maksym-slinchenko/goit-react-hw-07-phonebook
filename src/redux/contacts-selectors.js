import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.contacts;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;
const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export { getContacts, getFilter, getLoading, getFilteredContacts };
