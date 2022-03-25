import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types'; 

import css from 'components/ImageGallery/ImageGallery.module.css'

class ImageGallery extends Component {
 

    render () {
     const imagesArray = this.props;

    

        return (<ul className={css.imageGallery}>
            { (imagesArray.renderArray !== null) &&
            <><ImageGalleryItem 
            imageArray={imagesArray.renderArray} 
            onClick={imagesArray.onClick}/>
           </>     
        } 
      </ul>

        )
    }
}

ImageGallery.propTypes = {
  onClick:PropTypes.func,
  ImageGallery:PropTypes.array,
  value:PropTypes.string,
}

export default ImageGallery