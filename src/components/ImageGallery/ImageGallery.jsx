import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types'; 

import css from 'components/ImageGallery/ImageGallery.module.css'

export default  function ImageGallery ({renderArray, onClick}) {
  return (<ul className={css.imageGallery}>
    { (renderArray !== null) &&
    <><ImageGalleryItem 
    imageArray={renderArray} 
    onClick={onClick}/>
   </>} 
</ul>)}

ImageGallery.propTypes = {
  onClick:PropTypes.func,
  ImageGallery:PropTypes.array,
  value:PropTypes.string,
}