import css from './ButtonLoadMore.module.css';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ label, clickLoad }) =>  (
    <button type="button" className={css.ButtonLoadMore} onClick={clickLoad}>
      {label}
    </button>
  );

  ButtonLoadMore.propTypes = {
    label: PropTypes.string,
    clickLoad: PropTypes.func,
  };
  
export default ButtonLoadMore;