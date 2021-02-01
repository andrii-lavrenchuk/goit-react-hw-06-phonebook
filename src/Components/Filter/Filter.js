import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
