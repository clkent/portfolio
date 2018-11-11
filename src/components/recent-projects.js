import React from 'react'
import Img from 'gatsby-image'

const RecentProjects = props => (
  <div>
    <span className="tag">recent projects</span>

    {/* project 1 */}
    <div className="recent-project">
      <h2>
        <span>01</span> Dream Recall –
      </h2>
      <span className="project-tagline">
        main tagline about the project giving the general idea
      </span>
      <Img fluid={props.projectOneImgMain.childImageSharp.fluid} />
      <Img fluid={props.projectOneImgDetail.childImageSharp.fluid} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus
        purus eget eros finibus vestibulum.
      </p>
      <h3>Stack</h3>
      <p>JS, React, Redux, Node, Mongoose, MongoDB</p>
      <h3>Demo</h3>
      <p>
        <strong>username:</strong> rickC137
        <br />
        <strong>pw:</strong> wubbalubbadubdub
      </p>
    </div>

    {/* project 2 */}
    <div className="recent-project">
      <h2>
        <span>02</span> Another Project –
      </h2>
      <span className="project-tagline">
        main tagline about the project giving the general idea
      </span>
      <Img fluid={props.projectTwoImgMain.childImageSharp.fluid} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus
        purus eget eros finibus vestibulum.
      </p>
      <h3>Stack</h3>
      <p>JS, React, Redux, Node, Mongoose, MongoDB</p>
      <h3>Demo</h3>
      <p>
        <strong>username:</strong> rickC137
        <br />
        <strong>pw:</strong> wubbalubbadubdub
      </p>
      <Img fluid={props.projectTwoImgDetail.childImageSharp.fluid} />
    </div>

    {/* project 3 */}
    <div className="recent-project">
      <h2>
        <span>03</span> One More Project –
      </h2>
      <span className="project-tagline">
        main tagline about the project giving the general idea
      </span>
      <Img fluid={props.projectThreeImgMain.childImageSharp.fluid} />
      <Img fluid={props.projectThreeImgDetail.childImageSharp.fluid} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus
        purus eget eros finibus vestibulum.
      </p>
      <h3>Stack</h3>
      <p>JS, React, Redux, Node, Mongoose, MongoDB</p>
      <h3>Demo</h3>
      <p>
        <strong>username:</strong> rickC137
        <br />
        <strong>pw:</strong> wubbalubbadubdub
      </p>
    </div>
  </div>
)

export default RecentProjects
