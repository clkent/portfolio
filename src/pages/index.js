import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import RecentProjects from '../components/recent-projects'
import PastLife from '../components/past-life'
import Footer from '../components/footer'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <RecentProjects
            projectOneImgMain={this.props.data.projectOneImgMain}
            projectOneImgDetail={this.props.data.projectOneImgDetail}
            projectTwoImgMain={this.props.data.projectTwoImgMain}
            projectTwoImgDetail={this.props.data.projectTwoImgDetail}
            projectThreeImgMain={this.props.data.projectThreeImgMain}
            projectThreeImgDetail={this.props.data.projectThreeImgDetail}
          />
          <PastLife
            pastOne={this.props.data.pastOne}
            pastTwo={this.props.data.pastTwo}
            pastThree={this.props.data.pastThree}
            pastFour={this.props.data.pastFour}
          />
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage

//image querying to use w/ gatsby-image
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const smFluidImage = graphql`
  fragment smFluidImage on File {
    childImageSharp {
      fluid(maxWidth: 375) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    projectOneImgMain: file(relativePath: { eq: "dream-recall-main.jpg" }) {
      ...fluidImage
    }
    projectOneImgDetail: file(relativePath: { eq: "dream-recall-detail.jpg" }) {
      ...fluidImage
    }
    projectTwoImgMain: file(relativePath: { eq: "temp-project.jpg" }) {
      ...fluidImage
    }
    projectTwoImgDetail: file(relativePath: { eq: "temp-project.jpg" }) {
      ...fluidImage
    }
    projectThreeImgMain: file(relativePath: { eq: "temp-project.jpg" }) {
      ...fluidImage
    }
    projectThreeImgDetail: file(relativePath: { eq: "temp-project.jpg" }) {
      ...fluidImage
    }
    pastOne: file(relativePath: { eq: "temp-past.jpg" }) {
      ...smFluidImage
    }
    pastTwo: file(relativePath: { eq: "temp-past.jpg" }) {
      ...smFluidImage
    }
    pastThree: file(relativePath: { eq: "temp-past.jpg" }) {
      ...smFluidImage
    }
    pastFour: file(relativePath: { eq: "temp-past.jpg" }) {
      ...smFluidImage
    }
  }
`
