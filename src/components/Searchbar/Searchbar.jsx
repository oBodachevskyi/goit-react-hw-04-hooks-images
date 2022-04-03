import { useState } from 'react';
import PropTypes from 'prop-types'; 
import css from 'components/Searchbar/Searchbar.module.css'

export default function Searchbar(props) {
  const [searchingImgName, setSearchingImgName] = useState('')


  const handelInputValue = e => {
    setSearchingImgName(e.currentTarget.value)  
  }

  const handleSubmitImage = e => {
    e.preventDefault()
     if (searchingImgName !== "") {
      props.onSubmit(searchingImgName);
     }      
  } 
  
    return ( <header className={css.searchbar}>
      <form 
      className={css.searchForm}
      onSubmit={handleSubmitImage}> 
        <button 
        type="submit" 
        
        className={css.searchForm__button}>
          <span className={css.searchForm__button_label}>Search</span>
        </button>
    
        <input
          className={css.searchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handelInputValue}
          value={searchingImgName}
        />
      </form>
    </header>)
  
};

Searchbar.propTypes = {
  onSubmit:PropTypes.func,
}
