import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

const Modal = ({ id, getItemById, query }) => {
  return (
    <div data-id="modal" className={style.overlay}>
      <div className={style.modal}>
        <img src={getItemById(id).largeImageURL} alt={query} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  getItemById: PropTypes.func.isRequired,
  query: PropTypes.string,
};

Modal.defaultProps = {
  query: 'queried image',
};

export default Modal;
