import React, { useState } from 'react';
import styles from '../scss/Navbar.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);
  
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <a className={styles.logo} href='#home' onClick={e => {
  let features = document.getElementById("#home");
  e.preventDefault();  // Stop Page Reloading
  home && home.scrollIntoView({ behavior: 'smooth' });
  }}>KuView</a>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav__open`] : ''}`}
            
          >
            <a className={styles.nav__item} href='#Features' onClick={e => {
  let features = document.getElementById("Features");
  e.preventDefault();  // Stop Page Reloading
  features && features.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }} >
              Features
            </a>
            <a className={styles.nav__item} href='#the-team' onClick={e => {
  let team = document.getElementById("the-team");
  e.preventDefault();  // Stop Page Reloading
  team && team.scrollIntoView({ behavior: 'smooth' });
  }} >
              Team
            </a>
            <div className={styles.nav__button__container}>
              <Button />
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button />
          </div>
          <button
            className={styles.header__toggler}
            onClick={menuToggler}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
}

const Button = () => {

  return (
    <a
      className={styles.button}
      href='https://github.com/oslabs-beta/KuView'
      aria-label='Logout Button'
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} className="github-icon" style={{color: "#f0f0f0",} } size='2x'/>
      Github
    </a>
  );
};

export default Navbar;
