import { Form } from 'components/App.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={addContact}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
        <button type="submit">Add contact</button>
      </Form>
    </>
  );
};

export default ContactForm;
