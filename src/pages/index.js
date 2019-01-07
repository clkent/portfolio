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
        <>
          <RecentProjects
            projectOneImgMain={this.props.data.projectOneImgMain}
            projectOneImgDetail={this.props.data.projectOneImgDetail}
            projectTwoImgMain={this.props.data.projectTwoImgMain}
            projectTwoImgDetail={this.props.data.projectTwoImgDetail}
            projectThreeImgMain={this.props.data.projectThreeImgMain}
            projectThreeImgDetailOne={this.props.data.projectThreeImgDetailOne}
            projectThreeImgDetailTwo={this.props.data.projectThreeImgDetailTwo}
          />

          <PastLife
            pastOne={this.props.data.pastOne}
            pastTwo={this.props.data.pastTwo}
            pastThree={this.props.data.pastThree}
            pastFour={this.props.data.pastFour}
          />
        </>
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
    projectOneImgMain: file(relativePath: { eq: "dream-recall-main.png" }) {
      ...fluidImage
    }
    projectOneImgDetail: file(relativePath: { eq: "dream-recall-detail.png" }) {
      ...fluidImage
    }
    projectTwoImgMain: file(relativePath: { eq: "noteful-main.png" }) {
      ...fluidImage
    }
    projectTwoImgDetail: file(relativePath: { eq: "noteful-detail.png" }) {
      ...fluidImage
    }
    projectThreeImgMain: file(relativePath: { eq: "knowted-main.png" }) {
      ...fluidImage
    }
    projectThreeImgDetailOne: file(
      relativePath: { eq: "knowted-detail1.png" }
    ) {
      ...fluidImage
    }
    projectThreeImgDetailTwo: file(
      relativePath: { eq: "knowted-detail2.png" }
    ) {
      ...fluidImage
    }
    pastOne: file(relativePath: { eq: "scratch.png" }) {
      ...smFluidImage
    }
    pastTwo: file(relativePath: { eq: "votum.png" }) {
      ...smFluidImage
    }
    pastThree: file(relativePath: { eq: "launchpad.png" }) {
      ...smFluidImage
    }
    pastFour: file(relativePath: { eq: "convoz.png" }) {
      ...smFluidImage
    }
  }
`
