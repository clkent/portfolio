import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'

const Header = ({ siteTitle }) => (
  <header className="head">
    <img src={require('../images/smile.png')} alt="smiley icon" />
    <h1>Chelsea Kent</h1>
    <p>Creative Full-stack Engineer w/ big dreams and lots of motivation.</p>
    <Nav />
  </header>
)

export default Header
