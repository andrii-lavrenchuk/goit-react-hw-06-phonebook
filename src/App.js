// import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store';
// import shortid from 'shortid';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import Title from './Components/Title/Title';
import Container from './Components/Container/Container';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  const state = store.getState();
  console.log(state);

  return (
    <Container>
      <ToastContainer autoClose={3000} />
      <Title title="Phonebook" />

      <Form />

      <Title title="Contacts" />
      <Filter />
      {/* {state.contacts.items.length > 1 && <Filter />} */}

      <ContactList />
      {/* {state.contacts.items.length > 0 ? (
        <ContactList />
      ) : (
        <p>Add your first contact</p>
      )} */}
    </Container>
  );
}
