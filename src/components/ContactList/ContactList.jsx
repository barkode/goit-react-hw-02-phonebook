import PropType from 'prop-types';

const ContactList = contacts => {
  return (
    <ul>
      {contacts.contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            Abonent name: {name} || Abonent number: {number}
            <button type="button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      name: PropType.string.isRequired,
      number: PropType.string.isRequired,
    })
  ),
  // onDeleteContact: PropType.func.isRequired,
};
