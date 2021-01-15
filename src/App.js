import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import Title from './Components/Title/Title';
import Container from './Components/Container/Container';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (name === '' || number === '') {
      toast.info('Please fill all fields');
      return;
    } else if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.info(`Name ${name} is already exsist`);
      return;
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      toast.error('Enter the correct  phone number');
      return;
    }
    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <ToastContainer autoClose={3000} />
      <Title title="Phonebook" />

      <Form onSubmit={formSubmitHandler} />

      <Title title="Contacts" />
      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}
      {contacts.length > 0 ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>Add your first contact</p>
      )}
    </Container>
  );
}
