import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const contactNames = contacts.map(contact => contact.name);
    if (contactNames.includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  deleteContact = contactId => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== contactId),
    });
  };

  searchContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleFilterChange={this.handleFilterChange}
        />
        <ContactList
          contactsList={this.searchContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
