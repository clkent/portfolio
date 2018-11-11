import React from 'react'
import Img from 'gatsby-image'

const PastLife = props => (
  <div>
    <span className="tag">Past Life</span>

    {/* past life 1 */}
    <div className="past-life">
      <Img fluid={props.pastOne.childImageSharp.fluid} />
      <h3>Scratch</h3>
      <p>
        Founder of bootstrapped e-commerce subscription nail wrap company that
        collaborated with artists/creators monthly to release a DIY monthly mani
        box/kit.
      </p>
      <p>Built initial site w/ HTML, CSS, Ruby On Rails, Stripe</p>
      <p>
        <strong>Sold company in 2016</strong>
      </p>
      <ul>
        <li>
          <a
            href="https://instagram.com/goscratchit"
            alt="Scratch Instagram link"
          >
            link to IG
          </a>
        </li>
        <li>
          <a href="http://www.goscratch.it" alt="Scratch site link">
            link to site
          </a>
        </li>
        <li>
          <a
            href="https://www.kickstarter.com/projects/clkent/scratch-collaboratively-designed-nail-polish-wraps?ref=user_menu"
            alt="Scratch Kickstarter link"
          >
            link to KS
          </a>
        </li>
      </ul>
    </div>

    {/* past life 2 */}
    <div className="past-life">
      <Img fluid={props.pastOne.childImageSharp.fluid} />
      <h3>Votum</h3>
      <p>
        Co-founder of a non-profit text message based opinion polling service
        that connected constituents with their representatives.
      </p>
      <p>Built w/ HTML, CSS, Ruby On Rails, Twilio API </p>

      <ul>
        <li>
          <a href="" alt="">
            link to GH
          </a>
        </li>
      </ul>
    </div>

    {/* past life 3 */}
    <div className="past-life">
      <Img fluid={props.pastOne.childImageSharp.fluid} />
      <h3>Launchpad LA</h3>
      <p>
        Was invited to join Launchpad, a prominent LA based startup accelerator,
        as an Entrepreneur In Residence. While there I joined several early
        stage startups and helped them launch their MVPs stepping in whatever
        role was needed to get us there. (UI/UX, Product, FrontEnd dev)
      </p>
      <ul>
        <li>
          <a href="https://launchpad.la" alt="Launchpad LA website link">
            link to site
          </a>
        </li>
      </ul>
    </div>

    {/* past life 4 */}
    <div className="past-life">
      <Img fluid={props.pastOne.childImageSharp.fluid} />
      <h3>Convoz</h3>
      <p>
        Joined as an early hire focused on Product and UI/UX designer. Helped
        translate founders vision into launched MVP app.
      </p>
      <ul>
        <li>
          <a href="http://www.conovz.com" alt="Convoz site link">
            link to site
          </a>
        </li>
        <li>
          <a
            href="https://itunes.apple.com/us/app/convoz/id1247634067?mt=8"
            alt="convoz in app store link"
          >
            link to app
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default PastLife
