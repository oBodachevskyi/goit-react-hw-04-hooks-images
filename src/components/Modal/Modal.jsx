import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types'; 
import css from 'components/Modal/Modal.module.css';


const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    
    render () {
        const imageForModal = this.props.imageForModal
        const functionForModal = this.props.onClick

        return createPortal(<div 
        className={css.overlay} 
        onClick={functionForModal}>
        <div className={css.modal}>
          <img src={imageForModal} alt="" />
        </div>
      </div>,  modalRoot,)
    }
}

Modal.propTypes = {
  onClick:PropTypes.func,
  imageForModal:PropTypes.string, 
}
