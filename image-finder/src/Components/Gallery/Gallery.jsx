import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import style from './gallery.module.css';

const Gallery = ({ gallery, onButtonLoad, onGetItemId }) => (
  <div>
    <ul className={style.gallery}>
      {gallery.length > 0 &&
        gallery.map(galleryItem => (
          <li key={galleryItem.id} id={galleryItem.id}>
            <PhotoCard item={galleryItem} onGetItemId={onGetItemId} />
          </li>
        ))}
    </ul>
    <button type="button" className={style.button} onClick={onButtonLoad}>
      Load more
    </button>
  </div>
);

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
  onButtonLoad: PropTypes.func.isRequired,
  onGetItemId: PropTypes.func.isRequired,
};

export default Gallery;
