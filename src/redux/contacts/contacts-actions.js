import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const prepareAction = (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const addContact = createAction('contacts/Add', prepareAction);
const deleteContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
