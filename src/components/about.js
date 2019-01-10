import React from 'react'
import Img from 'gatsby-image'

const About = props => (
  <div className="about-container">
    <span className="tag about">About</span>
    <div className="about-content">
      <Img fluid={props.aboutImg.childImageSharp.fluid} />
      <div className="about-info">
        <h3>Within tech</h3>
        <p>
          I've recently come full circle back to my passion and roots in
          programming. I am currently looking to work as a Full-Stack Engineer
          (HTML, CSS, vanilla JS, React, Redux, Node.js, Mongodb, Mongoose,
          PostgreSQL, Knex ... etc) on projects and with teams that have heart
          who are remote first/friendly.
        </p>
        <p>
          I started my career with three years in Front-end development before
          moving towards working as a UX/UI designer for the last six years.
          Within the last six years I have also taken on the role as Product
          Manager for various early stage startups. I have worked for both
          established creative studios and startups, the latter being where I
          have focused my career.
        </p>
        <p>
          Although I have founded and sold my own startup, have experience as a
          Senior UX/UI Designer, and have most recently been in management
          roles, I am beyond excited to get back into code again. As a part of
          that process I studied at Thinkful in their Engineering Immersion 5
          month course as a way of diving into the deep end and accelerating my
          full-stack skillset.
        </p>
        <h3>Outside Of Tech</h3>
        <p>
          Although you'll usually find me creating on my computer, I'm also very
          dedicated to creating with my hands and building physical projects.
          I'm currently working on a shipping container guest house on my
          property in Joshua Tree (
          <a href="http://www.instagram.com/thedomehome">@TheDomeHome</a>).
        </p>
        <p>
          I also dedicate a lot of heart to writing and playing music. I
          currently play the guitar, uke, and enjoy singing. I'm also in the
          early and exciting stages of picking up the bass guitar.
        </p>
      </div>
    </div>
  </div>
)

export default About
