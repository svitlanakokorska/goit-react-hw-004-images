import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import ResetForm from 'components/ResetForm/ResetForm';



 const Searchbar = ({ onSubmit, onChange, ButtonClear, inputValue }) =>
 (
  <header className={css.searchBar}>
    <form className={css.searchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.searchFormButton}>
      <span className={css.searchFormButtonLabel}>Search</span>
      </button>
      <input
        className={css.searchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onChange}
        value={inputValue}
      />
      {inputValue && <ResetForm ButtonClear={ButtonClear} />}
    </form>
  </header>
);


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  ButtonClear: PropTypes.func,
  query: PropTypes.string,
};
export default Searchbar;