import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import operations from '../../redux/contacts-operations';
import Message from '../message/message';
import styles from './contacts-form.module.css';
import { getContacts } from '../../redux/contacts-selectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    errorActive: false,
    errorMessage: '',
  };

  // Изменение свойств для инпутов
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  // вызов сообщения error
  messageAppearing = message => {
    this.setState({ errorMessage: message, errorActive: true });
  };

  // проверка пустые поля или нет
  isFieldEmpty = name => {
    if (name === '') {
      this.messageAppearing('All fields must be completed');
      return true;
    }
  };

  // Добавление нового контатка в список
  handleAddContacts = e => {
    e.preventDefault();
    if (
      this.isFieldEmpty(this.state.name) ||
      this.isFieldEmpty(this.state.number)
    ) {
      return;
    }
    const namesArray = this.props.contacts.map(c => c.name.toLowerCase());
    if (namesArray.includes(this.state.name.toLowerCase())) {
      const i = namesArray.indexOf(this.state.name.toLowerCase());
      this.messageAppearing(
        `"${this.props.contacts[i].name}" is already in contacts`,
      );
      this.reset();
      return;
    }
    this.props.onCreateContacts(this.state.name, this.state.number);
    this.reset();
  };

  // Обнуление значений формы
  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

  // удаление сообщения error
  resetError = () => {
    setTimeout(() => {
      this.setState({ errorActive: false });
    }, 2000);
  };

  render() {
    return (
      <>
        <CSSTransition
          in={this.state.errorActive}
          timeout={2000}
          classNames={styles}
          unmountOnExit
          onEnter={this.resetError}
          onExited={() => this.setState({ errorMessage: '' })}
        >
          <Message message={this.state.errorMessage} />
        </CSSTransition>
        <form>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              name="number"
              type="tel"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" onClick={this.handleAddContacts}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onCreateContacts: (name, number) =>
    dispatch(operations.createContact(name, number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
