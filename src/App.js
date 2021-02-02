import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import Title from './Components/Title/Title';
import Container from './Components/Container/Container';

export default function App() {
  return (
    <Container>
      <ToastContainer autoClose={3000} />
      <Title title="Phonebook" />
      <Form />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </Container>
  );
}
