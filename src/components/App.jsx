import { Component } from 'react';
import { nanoid } from 'nanoid';
import { number } from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Jack Jones', number: '975-24-89' },
      { id: 'id-5', name: 'Captain Morgan', number: '227-90-26' },
      { id: 'id-6', name: 'Bilie Joe', number: '217-95-26' },
      { id: 'id-7', name: 'Joe Foster', number: '297-99-26' },
      { id: 'id-8', name: 'Samuel El Jackson', number: '287-04-26' },
      { id: 'id-9', name: 'Annie Milligan', number: '154-44-28' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    contacts.push({ id: nanoid(), name, number });
    this.reset();
  };

  handleFilterAbonent = () => {};

  reset = () => {
    this.setState({ name: '', number: '', filter: '' });
  };

  render() {
    const { name, number, contacts } = this.state;
    return (
      <>
        <h1>Phone book</h1>
        <form>
          Abonent name.
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter abonent name"
            value={name}
            onChange={this.handleChange}
            required
          />
          Abonent phone number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            value={number}
            onChange={this.handleChange}
            required
          />
          <button type="submit" onClick={this.handleSubmit}>
            Add contact
          </button>
          <h2>Contacts</h2>
          Find contacts by name
          <input></input>
          <ul>
            {contacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  Abonent name: {name} || Abonent number: {number}
                </li>
              );
            })}
          </ul>
        </form>
      </>
    );
  }
}
