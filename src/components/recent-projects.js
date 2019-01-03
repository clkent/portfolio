import React from 'react'
import Img from 'gatsby-image'

const RecentProjects = props => (
  <div>
    <span className="tag">recent projects</span>

    {/* project 1 */}
    <div className="recent-project">
      <div className="project-name">
        <h2>
          <span>01</span> Dream Recall –
        </h2>
        <span>a dream journal that can help unlock your unconscious mind</span>
      </div>
      <a href="https://dream-recall.herokuapp.com/" alt="Dream Recall app link">
        <Img fluid={props.projectOneImgMain.childImageSharp.fluid} />
        <Img fluid={props.projectOneImgDetail.childImageSharp.fluid} />
      </a>
      <div className="project-info">
        <div>
          <p>
            On your own custom Dream Desktop you'll find the tools you need to
            record, revisit, and understand your dreams. Writing down your
            dreams as soon as you wake up dramatically increases your ability to
            remember details and it's what's in the details that really matter.
          </p>
          <h3>Stack</h3>
          <p>JS, React, Redux, Node, Mongoose, MongoDB</p>
          <h3>Demo</h3>
          <p>
            <strong>username:</strong> rickC137
            <br />
            <strong>pw:</strong> wubbalubbadubdub
          </p>
          <a
            href="https://dream-recall.herokuapp.com/"
            alt="link to Dream Recall site"
          >
            VISIT SITE
          </a>
          &bull;
          <a href="https://github.com/clkent/dreams-client"> GITHUB REPO</a>
        </div>
      </div>
    </div>

    {/* project 2 */}
    <div className="recent-project">
      <div className="project-name">
        <h2>
          <span>02</span> Noteful –
        </h2>
        <span>Learn to read music with the power of spaced repetition</span>
      </div>
      <a
        href="https://learn-noteful.herokuapp.com/dashboard"
        alt="noteful app link"
      >
        <Img fluid={props.projectTwoImgMain.childImageSharp.fluid} />
        <Img fluid={props.projectTwoImgDetail.childImageSharp.fluid} />
      </a>
      <div className="project-info">
        <div>
          <p>
            Noteful will present you with a single note to learn at a time.
            We'll keep track of how many you get right and wrong and show you
            the notes again based on a spaced repetition algorithm. This
            repetition helps you learn in no time.
          </p>
          <h3>Stack</h3>
          <p>JS, React, Redux, Node, Mongoose, MongoDB</p>
          <h3>Demo</h3>
          <p>
            <strong>username:</strong> jane
            <br />
            <strong>pw:</strong> janelearnsmusic
          </p>
          <a href="https://learn-noteful.herokuapp.com/">VISIT SITE</a>
          &bull;
          <a href="https://github.com/thinkful-ei24/Noteful-Client">
            {' '}
            GITHUB REPO
          </a>
        </div>
      </div>
    </div>

    {/* project 3 */}
    <div className="recent-project">
      <div className="project-name">
        <h2>
          <span>03</span> Knowted –
        </h2>
        <span>
          Organize &amp; simplify learning by grouping resources by topic
        </span>
      </div>
      <a href="https://knowted.netlify.com/" alt="knowted app link">
        <Img fluid={props.projectThreeImgMain.childImageSharp.fluid} />
        <Img fluid={props.projectThreeImgDetailOne.childImageSharp.fluid} />
        <Img fluid={props.projectThreeImgDetailTwo.childImageSharp.fluid} />
      </a>
      <div className="project-info">
        <div>
          <p>
            Learning from online resources can sometimes feel chaotic. There are
            so many sites and video tutorials to keep track of and often no real
            order for what you should focus on next. Not to mention no easy way
            to keep related notes for what you've learned!
          </p>
          <h3>Stack</h3>
          <p>JS, React, Redux, Node, PostgreSQL</p>
          <a
            href="https://knowted.netlify.com/demo"
            alt="demo account for Knowted"
          >
            Demo&nbsp;
          </a>
          &bull;
          <a href="https://knowted.netlify.com/"> VISIT SITE</a>
          &bull;
          <a href="https://github.com/clkent/knowted"> GITHUB REPO</a>
        </div>
      </div>
    </div>
  </div>
)

export default RecentProjects
