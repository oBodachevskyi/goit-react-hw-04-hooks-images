import { useEffect, useState } from 'react';
import fetchImages from '../service/fetchImages';
import css from 'components/App.module.css';
import Searchbar from 'components/Searchbar/Searchbar'; 
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { SpinnerRoundFilled } from 'spinners-react';



export default function App() {
 const[searchingImgName, setSearchingImgName] = useState('');
 const [images, setImages] = useState(null);
 const [numberPage, setNumberPage] = useState(1);
 const [largeImgForModal, setLargeImgForModal] = useState('');
 const [showModal, setShowModal] = useState(false);
 const [spinerView, setSpinerView] = useState(false)


const handleForSubmit = (searchingImgName) => {   
  setSearchingImgName(searchingImgName)
}

useEffect(() => {
  if (!searchingImgName) {
    return
  }
  setSpinerView(true) 
  fetchImages(searchingImgName, 1)
  .then(res => res.json())
  .then(imagesRender => {
    setImages(imagesRender.hits);
    setNumberPage(1);
    setSpinerView(false)
  }); 
}, [searchingImgName])

const onImageClick = e => { 
  setLargeImgForModal((images.find(image => image.id === Number(e.currentTarget.id))).largeImageURL)   
  setShowModal(true)
}

const toggleModal = () => {  
 setShowModal(!showModal);
};
  
const  onButtonClikRender = (e) => {
  const searchPage = numberPage + 1; 
  
  setSpinerView(true) 
    fetchImages(searchingImgName, searchPage)
    .then(res => res.json())
    .then((imagesNext) => {
      setImages([...images, ...imagesNext.hits]);
      setNumberPage(searchPage);
      setSpinerView(false);
    })         
  }

  return (
    <div className={css.app}>

    <Searchbar        
     onSubmit={handleForSubmit}></Searchbar>
    
     <ImageGallery 
    renderArray={images} 
    onClick={onImageClick}/>

    {(spinerView) && 
    <SpinnerRoundFilled 
    size={90} 
    thickness={87} 
    speed={98} 
    color="rgba(63, 81, 181, 1)" />}  

    {images !== null && 
    <Button onClick={onButtonClikRender} />}
     
    {showModal &&
    <Modal 
    imageForModal={largeImgForModal} 
    onClose={toggleModal}/>} 

    </div>
  )
}


