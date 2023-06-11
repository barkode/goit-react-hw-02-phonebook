import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactoForm/ContactForm';

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

  handleFilterAbonent = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) => {
      const abonentName = name.toLowerCase();
      const abonentFilter = filter.toLowerCase();
      return abonentName.includes(abonentFilter);
    });
  };

  reset = () => {
    this.setState({ name: '', number: '', filter: '' });
  };

  render() {
    const { name, number, filter, contacts } = this.state;

    return (
      <>
        <h1>Phone book</h1>
        <ContactForm />
        <h2>Contacts</h2>
        Find contacts by name
        <input
          type="text"
          name="filter"
          title="To find abonent enter they name"
          value={filter}
          onChange={this.handleChange}
        ></input>
        <ul>
          {(filter ? this.handleFilterAbonent() : contacts).map(
            ({ id, name, number }) => {
              return (
                <li key={id}>
                  Abonent name: {name} || Abonent number: {number}
                </li>
              );
            }
          )}
        </ul>
      </>
    );
  }
}
