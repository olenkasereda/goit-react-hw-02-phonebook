import React from 'react';
import { PropTypes } from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <>
      <li className={s.item}>
        <p>
          {name}: {number}
        </p>
        <button
          className={s.buttonDelete}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
