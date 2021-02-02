import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import contactActions from '../../redux/contacts/contacts-actions';
import Contact from '../Contact/Contact';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactActions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <Contact
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}
