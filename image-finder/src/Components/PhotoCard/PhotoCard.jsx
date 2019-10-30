import React from 'react';
import PropTypes from 'prop-types';
import style from './photoCard.module.css';

const PhotoCard = ({ item, onGetItemId, query }) => (
  <div className={style.photoCard}>
    <img src={item.webformatURL} alt={query} />

    <div className={style.stats}>
      <p className={style.statsItem}>
        <i className="material-icons">thumb_up</i>
        {item.likes}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">visibility</i>
        {item.views}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">comment</i>
        {item.comments}
      </p>
      <p className={style.statsItem}>
        <i className="material-icons">cloud_download</i>
        {item.downloads}
      </p>
    </div>

    {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
    <button
      type="button"
      className={style.fullscreenButton}
      onClick={onGetItemId}
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

PhotoCard.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  }).isRequired,
  onGetItemId: PropTypes.func.isRequired,
  query: PropTypes.string,
};

PhotoCard.defaultProps = {
  query: 'queried image',
};

export default PhotoCard;
