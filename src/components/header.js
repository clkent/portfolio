import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'

import { HeaderContainer } from '../styles/header.style'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <img src={require('../images/smile.svg')} alt="smiley icon" />
    <div>
      <h1>Chelsea Kent</h1>
      <p>Creative Full-stack Engineer w/ big dreams and lots of motivation.</p>
    </div>
    <Nav />
  </HeaderContainer>
)

export default Header
