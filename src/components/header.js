import React from 'react'
import Nav from './nav'

import { HeaderContainer } from '../styles/header.style'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <img src={require('../images/smile.svg')} alt="smiley icon" />
    <div>
      <h1>Chelsea Kent</h1>
      <p>Creative Full-stack Engineer w/ big dreams and lots of motivation.</p>
      <ul>
        <li>
          <a href="mailto:hello@clkent.com" alt="email hello@clkent.com">
            hello@clkent.com
          </a>
        </li>
        <li>
          <a href="https://github.com/clkent" alt="github link">
            github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/clkent/" alt="linkedin link">
            linkedin
          </a>
        </li>
      </ul>
    </div>
    <Nav />
  </HeaderContainer>
)

export default Header
