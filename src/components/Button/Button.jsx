import React from 'react';
import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types'; 


const Button = ({onClick}) => {
    return (<><button type='button' 
    className={css.button}
    onClick={onClick}>
    Load more</button></>)
}

 Button.propTypes = {
 onClick: PropTypes.func, 
}  


export default Button