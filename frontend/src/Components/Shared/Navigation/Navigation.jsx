import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const myStyle = {
    color : '#fff',
    textDecoration : 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display : 'flex',
    alignItems : 'center'
  }

  const logoText = {
    marginLeft : '10px'
  }

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={myStyle} to="/">
        <img src="/Images/logo.png" alt="logo" />
        <span style={logoText}>Talk Over</span>
      </Link>
    </nav>
  )
}

export default Navigation