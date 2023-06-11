import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [{ id: '123', name: 'joan' }],
    name: '',
  };

  handleFilterChange = () => {};

  handleAddContact = newContact => {};

  handleDeleteContact = () => {};

  render() {
    const { name } = this.state;
    console.log(name);
    return (
      <>
        <form>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter abonent name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <button type="submit" onSubmit={this.handleSubmit}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
