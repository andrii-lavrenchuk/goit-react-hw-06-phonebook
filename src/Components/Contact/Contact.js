import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

export default function Contact({ name, number, onDeleteContact }) {
  return (
    <div>
      <p>
        {name}:{number}
      </p>

      <IconButton onClick={onDeleteContact} aria-label="Delete contact">
        <DeleteIcon width="20" height="20" fill="#fff" />
      </IconButton>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
