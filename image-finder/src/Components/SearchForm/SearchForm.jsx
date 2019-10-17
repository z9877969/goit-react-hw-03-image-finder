import React from "react";
// import PropTypes from "prop-types";
import style from "./searchForm.module.css";

const SearchForm = ({ onSubmit }) => (
  <form className={style.searchForm} onSubmit={onSubmit}>
    <input type="text" autoComplete="off" placeholder="Search images..." />
  </form>
);

// SearchForm.propTypes = {
//   // bla: PropTypes.string,
// };

// SearchForm.defaultProps = {
//   // bla: 'test',
// };

export default SearchForm;
