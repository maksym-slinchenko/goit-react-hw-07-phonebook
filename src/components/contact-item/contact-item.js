import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/contacts-operations';
import { getContacts } from '../../redux/contacts-selectors';

class ContactItem extends Component {
  onRemove;

  render() {
    const { id, name, number } = this.props;

    return (
      <>
        <li key={id} name={name}>
          {`${name}: ${number}`}
          <button
            type="button"
            onClick={() => {
              // изменение стэйта, удаление
              this.props.onRemove(id);
              // изменение стэйта, удаление
            }}
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}
const mapStateToprops = state => ({ contacts: getContacts(state) });
const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(operations.removeContact(id)),
});
export default connect(mapStateToprops, mapDispatchToProps)(ContactItem);
