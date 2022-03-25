import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import css from 'components/Searchbar/Searchbar.module.css'

class Searchbar extends Component {

  state = {
    searchingImgName:''
  }

  
  handelInputValue = e => {
    this.setState({searchingImgName: e.currentTarget.value}) 
  }

  handleSubmitImage = e => {
    e.preventDefault()
     if (this.state.searchingImgName !== "") {
      this.props.onSubmit(this.state.searchingImgName);
     }     
  } 

    render ( ) {
      const {inputValue} = this.state
      return ( <header className={css.searchbar}>
        <form 
        className={css.searchForm}
        onSubmit={this.handleSubmitImage}> 
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
            onChange={this.handelInputValue}
            value={inputValue}
          />
        </form>
      </header>)
    }
}

Searchbar.propTypes = {
  onSubmit:PropTypes.func,
}
export default Searchbar;