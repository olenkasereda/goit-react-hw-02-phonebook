import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
    id: nanoid(),
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    // this.props.onSubmit(this.state);
    this.props.addContact({ name: name, number: number, id: nanoid() });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.id}>
          Name
          <input
            placeholder="Full name"
            id={this.id}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor={this.id}>
          Number
          <input
            placeholder="Phone number: +380..."
            id={this.id}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className={s.buttonAdd} type="submit">
          Add contact{' '}
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default Form;
