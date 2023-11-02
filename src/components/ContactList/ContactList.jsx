const ContactList = ({ contactsList, deleteContact }) => {
  const filteredContacts = contactsList();
  return (
    <>
      <ul>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
