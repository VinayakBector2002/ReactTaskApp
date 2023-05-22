import React from 'react'
import PropTypes from 'prop-types'

const HeaderButton = ( {color, buttonTxt, buttonAction} ) => {
  return (
    <button 
        onClick={buttonAction} 
        style={{ backgroundColor: color}}
        className='btn'> 

        {buttonTxt} 

    </button>
  )
}

// Add a default prop
HeaderButton.defaultProps = {
    buttonTxt: 'Add',
    color: 'blue',
};

HeaderButton.propTypes = {
    buttonAction: PropTypes.func,
}

export default HeaderButton