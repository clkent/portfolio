import React from 'react'

import { FooterContainer } from '../styles/footer.style'

const Footer = () => (
  <FooterContainer>
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
      {/* <li>
        <a href="" alt="resume link">
          resume
        </a>
      </li> */}
    </ul>
  </FooterContainer>
)

export default Footer
