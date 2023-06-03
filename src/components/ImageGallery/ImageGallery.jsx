import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import  ImageGalleryItem  from '../ImageGalleryItem/ImageGalleryItem';



const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.gallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        onImageClick={onImageClick}
      />
    ))}
  </ul>
);

ImageGallery.PropTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
  onImageClick: PropTypes.func,
};

export default ImageGallery;