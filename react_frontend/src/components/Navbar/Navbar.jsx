import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { easeInOut, motion } from 'framer-motion';

import images from '../../constants/images'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.akramLogo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`} > {item} </a>
          </li>
        )
        )}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {
            toggle && (
              <motion.div
                whileInview={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: easeInOut}}
              >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                    {['home', 'about', 'skills', 'contact'].map((item) => (
              <li key={`link-${item}`} className='app__flex p-text'>

                <a href={`#${item}`} onClick={() => setToggle(false)} > {item} </a>
              </li>
              
            )
            )}
            </ul>
              </motion.div>
            )
          }
      </div>

    </nav>
  )
}

export default Navbar