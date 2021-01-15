import PropTypes from 'prop-types';

import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
