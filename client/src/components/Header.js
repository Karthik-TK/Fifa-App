import PropTypes from 'prop-types'
import Dashboard from './Dashboard';

const Header = ({ title }) => {

  return (
    <header className='header'>
      <Dashboard />
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