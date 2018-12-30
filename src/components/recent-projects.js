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
        <span>main tagline about the project giving the general idea</span>
      </div>
      <Img fluid={props.projectOneImgMain.childImageSharp.fluid} />
      <div className="project-info">
        <Img fluid={props.projectOneImgDetail.childImageSharp.fluid} />
        <div>
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
    </div>

    {/* project 2 */}
    <div className="recent-project">
      <div className="project-name">
        <h2>
          <span>02</span> Noteful –
        </h2>
        <span>main tagline about the project giving the general idea</span>
      </div>
      <Img fluid={props.projectTwoImgMain.childImageSharp.fluid} />
      <div className="project-info">
        <Img fluid={props.projectTwoImgDetail.childImageSharp.fluid} />
        <div>
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
    </div>

    {/* project 3 */}
    <div className="recent-project">
      <div className="project-name">
        <h2>
          <span>03</span> Knowted –
        </h2>
        <span>main tagline about the project giving the general idea</span>
      </div>
      <Img fluid={props.projectThreeImgMain.childImageSharp.fluid} />
      <Img fluid={props.projectThreeImgDetailOne.childImageSharp.fluid} />
      <div className="project-info">
        <Img fluid={props.projectThreeImgDetailTwo.childImageSharp.fluid} />
        <div>
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
    </div>
  </div>
)

export default RecentProjects
