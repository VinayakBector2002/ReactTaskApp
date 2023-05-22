import PropTypes from 'prop-types'
import HeaderButton from './HeaderButton';
import { Tasks } from './Tasks';
const Header = ({ title }) => {
    const buttonAction = () => {
        console.log("Button was clicked!");
    }

  return (
    <header>
        <h1>{title}</h1>
        <HeaderButton color='green' buttonAction ={buttonAction}/>
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