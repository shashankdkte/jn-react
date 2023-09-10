import React , { useState}from 'react'
import Logo from './Logo';
import SearchInput from './SearchInput';
import NumResults from './NumResults';

const Navbar = ({children}) => {

  return (
    <nav className="nav-bar">
       {children}
      </nav>
  )
}

export default Navbar