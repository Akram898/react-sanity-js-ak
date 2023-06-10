import images from '../../constants/images'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.akramLogo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        )
        )}
      </ul>
    </nav>
  )
}

export default Navbar