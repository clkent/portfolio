import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import { App } from '../styles/index.style'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'This is the portfolio website of Chelsea Kent a Full-stack software engineer, UI/UX Designer, and Product Manager.',
            },
            {
              name: 'keywords',
              content:
                'Full-stack, Software, Engineer, User Experience, Designer, Developer, Chelsea Kent',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <App>{children}</App>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
