import css from './ResetForm.module.css';
import PropTypes from 'prop-types';

const ResetForm = ({ ButtonClear }) => (
  <button
    type="button"
    className={css.ButtonClear}
    onClick={ButtonClear}
  ></button>
);

ResetForm.propTypes = {
  ButtonClear: PropTypes.func,
};

export default ResetForm;


