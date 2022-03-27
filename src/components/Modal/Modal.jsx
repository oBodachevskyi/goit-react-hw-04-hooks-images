import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types'; 
import css from 'components/Modal/Modal.module.css';


const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  
  componentDidMount () { 
    window.addEventListener('keydown', this.handleKeyDown);
   }

   componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  OnBackdropClick = e => {
     if(e.target === e.currentTarget) {
      this.props.onClose()
    } 
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {     
      this.props.onClose()
    }
  };



    render () {
        const imageForModal = this.props.imageForModal
      
        return createPortal(<div 
        className={css.overlay} 
        onClick={this.OnBackdropClick}>
        <div className={css.modal}>
          <img src={imageForModal} alt="" />
        </div>
      </div>,  modalRoot,)
    }
}

Modal.propTypes = {
  onClose:PropTypes.func,
  imageForModal:PropTypes.string, 
}
