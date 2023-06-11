import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name } = this.state;
    contacts.push({ id: nanoid(), name });
    this.setState({ name: '' });
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <h1>Phone book</h1>
        <form>
          Name
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
          <button type="submit" onClick={this.handleSubmit}>
            Add contact
          </button>
          <h2>Contacts</h2>
          <ul>{contacts.map(({ id, name }) => {
            return <li key={id}>Abonent name: {name}</li>;
          })}</ul>
        </form>
      </>
    );
  }
}
