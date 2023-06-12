import { Component } from 'react';
import PropType from 'prop-types';

class ContactList extends Component {
  render() {
    const { contacts, handleDeleteContact } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              Abonent name: {name} || Abonent number: {number}
              <button
                type="button className={css.iconDelete}"
                onClick={() => handleDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      name: PropType.string.isRequired,
      number: PropType.string.isRequired,
    })
  ),
  handleDeleteContact: PropType.func.isRequired,
};
