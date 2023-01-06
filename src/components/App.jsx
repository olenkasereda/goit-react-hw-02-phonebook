import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';
import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = ({ name, number }) => {
    const names = this.state.contacts.map(contact => contact.name);
    if (names.indexOf(name) >= 0) {
      alert(name + ' is already in contacts');
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
      };
    });
  };

  deleteContact = сontactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== сontactId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };

  getVisibleContacts = () => {
    let { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  loginInputId = nanoid();
  render() {
    // const { name, number } = this.state;

    return (
      <div className={s.container}>
        <h1> Phonebook</h1>
        <Form addContact={this.addContact} />
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <Contacts
          contacts={this.getVisibleContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
