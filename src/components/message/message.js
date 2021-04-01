import React from 'react';
import PropTypes from 'prop-types';
import s from './message.module.css';

export default function Message({ message }) {
  return (
    <div className={s.messageContainer}>
      <p className={s.message}>{message}</p>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string,
};
