import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import operations from '../../redux/contacts-operations';

import ContactItem from '../contact-item/contact-item';
import styles from './contact-list.module.css';
import {
  getFilter,
  getLoading,
  getFilteredContacts,
} from '../../redux/contacts-selectors';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        {this.props.isLoading && <h2>Loading...</h2>}
        <TransitionGroup component="ul" className={styles.contactList}>
          {this.props.contacts.map(i => {
            return (
              <CSSTransition key={i.id} timeout={250} classNames={styles}>
                <ContactItem id={i.id} name={i.name} number={i.number} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
  filter: getFilter(state),
  isLoading: getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
