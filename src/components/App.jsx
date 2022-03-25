import React, { Component } from 'react';
import fetchImages from '../service/fetchImages';
import css from 'components/App.module.css';
import Searchbar from 'components/Searchbar/Searchbar'; 
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { SpinnerRoundFilled } from 'spinners-react';

class App extends Component {
 state = {
   searchingImgName:'',
   images: null,
   numberPage: 1,
   largeImgForModal:'',
   showModal:false,
   spinerView: false
}

 componentDidUpdate (prevState, prevProps) { 

 if (prevProps.searchingImgName !== this.state.searchingImgName) {
      this.setState({spinerView: true}) 
      fetchImages(this.state.searchingImgName, 1)
      .then(res => res.json())
      .then(imagesRender => this.setState({images: imagesRender.hits, numberPage: 1,  spinerView: false })); 
  } 
  window.addEventListener('keydown', this.handleKeyDown);
}

  onButtonClikRender = (e) => {
      const searchName = this.state.searchingImgName;
      const searchPage = this.state.numberPage + 1; 

    this.setState({spinerView: true}) 
     fetchImages(searchName, searchPage)
      .then(res => res.json())
      .then((imagesNext) => (this.setState({images: [...this.state.images, ...imagesNext.hits], 
              numberPage: searchPage, spinerView: false}) )
      );   
  }

  handleForSubmit = (searchingImgName) => {   
    this.setState({searchingImgName})
  }

  onImageClick = e => { 
    const stateForBigImg = this.state.images
    this.setState({largeImgForModal: (stateForBigImg.find(image => image.id === Number(e.currentTarget.id))).largeImageURL,
    showModal: true})  
  }

  OnModalClick = e => {
    if(e.target === e.currentTarget) {
      this.setState({showModal: false})
    }
  }

  handleKeyDown = e => {
    if (e.code === 'Escape' && this.state.showModal === true) {     
      this.setState({showModal: false})
    }
  };

  render () {
    const stateValue = this.state;
  
    return (
      <div className={css.app}>

      <Searchbar        
       onSubmit={this.handleForSubmit}></Searchbar>
      
      <ImageGallery 
      value={stateValue.searchingImgName} 
      renderArray={stateValue.images} 
      onClick={this.onImageClick}/>

      {(stateValue.spinerView) && 
      <SpinnerRoundFilled 
      size={90} 
      thickness={87} 
      speed={98} 
      color="rgba(63, 81, 181, 1)" />}  

      {stateValue.images !== null && 
      <Button onClick={this.onButtonClikRender} />}
       
      {stateValue.showModal &&
      <Modal 
      imageForModal={stateValue.largeImgForModal} 
      onClick={this.OnModalClick}/>}

      </div>
    );
  }
};

export default App
