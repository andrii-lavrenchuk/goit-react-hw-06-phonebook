import { useState } from 'react';

import PropTypes from 'prop-types';
import s from './Form.module.css';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    onSubmit(name, number);
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
