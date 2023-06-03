import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ onImageClick, largeImageURL, webformatURL }) => {
  <li className={css.galleryItem}>
    <img
      className={css.ImageGalleryItem}
      src={webformatURL}
      alt=""
      onClick={() => onImageClick(largeImageURL)}
    />
  </li>;
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onImageClick: PropTypes.func,
};

export default ImageGalleryItem;
