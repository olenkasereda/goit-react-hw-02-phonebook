import React from 'react';
import { PropTypes } from 'prop-types';
import s from './ContactsList.module.css';
import ContactItem from './ContactItem';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
