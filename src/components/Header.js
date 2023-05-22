import PropTypes from 'prop-types'
import HeaderButton from './HeaderButton';
import { Tasks } from './Tasks';
import { useLocation } from 'react-router-dom';


const Header = ({ title, onAdd, visibleMenu }) => {
    const location = useLocation()

    const buttonAction = () => {
        console.log("Button was clicked!");
    }

  return (
    <header>
        <h1>{title}</h1>
        {location.pathname ==='/' && <HeaderButton 
            color={visibleMenu ? 'red' : 'green'} 
            buttonAction ={onAdd} 
            buttonTxt={visibleMenu? 'Close' : 'Add'}/>
        }
        <Tasks/> 
    </header>
  )
}


// Add prop type to ensure that title is 
//      always a string 
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header