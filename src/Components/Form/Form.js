import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import contactActions from '../../redux/contacts/contacts-actions';

import s from './Form.module.css';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '' || number === '') {
      toast.info('Please fill all fields');
      return;
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      toast.error('Enter the correct  phone number');
      setName('');
      setNumber('');
      return;
    }
    dispatch(contactActions.addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="John Jonson"
          value={name}
          onChange={handleChange}
        ></input>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            placeholder="123-45-67"
            value={number}
            onChange={handleChange}
          ></input>
        </label>
      </label>

      <IconButton type="submit" aria-label="Add contact">
        <AddIcon width="20" height="20" fill="#fff" />
      </IconButton>
    </form>
  );
}
