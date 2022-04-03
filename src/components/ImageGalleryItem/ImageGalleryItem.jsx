import React from 'react';
import PropTypes from 'prop-types'; 
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'

const ImageGalleryItem = ({imageArray, onClick}) => {
  
    return (<>
     {imageArray.map(({id, webformatURL}) => {
         return (<li onClick={onClick} key={id} id={id} className={css.imageGalleryItem}>
         <img 
         src={webformatURL} 
         alt=""
         className={css.imageGalleryItem__image} />
       </li>)
     })}
     </>
    )
}

ImageGalleryItem.propTypes = {
  onClick:PropTypes.func,
  imageArray:PropTypes.array,
}

export default ImageGalleryItem