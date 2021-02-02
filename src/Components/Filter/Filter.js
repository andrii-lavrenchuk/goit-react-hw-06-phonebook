import { useSelector, useDispatch } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(contactActions.changeFilter(e.target.value))}
      ></input>
    </label>
  );
}
