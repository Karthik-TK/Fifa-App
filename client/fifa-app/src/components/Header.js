import PropTypes from 'prop-types'

const Header = ({ title }) => {

  const mystyle = {
    color: "white",
    backgroundColor: "Black",
    padding: "10px",
    fontFamily: "Arial",
    textAlign: "center"
  };
  
  return (
    <header className='header'>
      <h1 style={mystyle}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'FIFA Dashboard',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header