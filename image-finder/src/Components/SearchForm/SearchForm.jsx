import React from 'react';
import PropTypes from 'prop-types';
import style from './searchForm.module.css';

const SearchForm = ({ onSubmit }) => (
  <form className={style.searchForm} onSubmit={onSubmit}>
    <input type="text" autoComplete="off" placeholder="Search images..." />
  </form>
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
