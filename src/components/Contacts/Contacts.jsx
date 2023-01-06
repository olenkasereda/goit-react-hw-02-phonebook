import React from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Contacts.module.css';
const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={nanoid()}>
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
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
