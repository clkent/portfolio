import styled from 'styled-components'

export const App = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  span,
  p {
    font-family: effra, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .tag {
    background-color: #ffcd00;
    padding: 5px;
    text-transform: uppercase;
    font-size: 0.75em;
    color: #fff;
    letter-spacing: 1px;
  }

  .recent-project {
    .project-name {
      margin: 20px 0;
      display: flex;
      flex-direction: row;
      align-items: center;

      h2 {
        margin-bottom: 10px;

        font-family: effra, sans-serif;
        font-weight: 500;
        font-style: normal;
        text-transform: uppercase;
        font-size: 1.25em;
        letter-spacing: 1px;

        span {
          font-family: gastromond, sans-serif;
          font-weight: 400;
          margin-bottom: 10px;
          font-size: 1.75em;
          color: #fff;
          -webkit-text-stroke: 1.5px black;
          margin-right: 10px;
          margin-left: 0;
        }
      }

      span {
        margin: 10px 0 0 10px;
      }
    }

    .gatsby-image-wrapper {
      max-width: 1040px;
      margin: 0 auto;
    }

    .project-info {
      margin-top: 10px;
    }
  }
`
