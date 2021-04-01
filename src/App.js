import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './components/contacts-form/contacts-form';
import ContactList from './components/contact-list/contact-list';
import Filter from './components/filter/filter';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="Logo-slider"
        >
          <h1 className="App-logo">Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}
