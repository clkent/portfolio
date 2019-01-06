import styled from 'styled-components'

export const App = styled.div`
  max-width: 1080px;
  padding: 0 20px;
  margin: 0 auto;

  span,
  p {
    font-family: effra, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  a {
    text-transform: uppercase;
    color: #000;
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
      max-width: 1080px;
      margin: 0 auto;
      margin-bottom: 20px;
    }

    .project-info {
      margin-top: 20px;
      margin-bottom: 120px;
      font-size: 1.15em;
      font-weight: 400;
      line-height: 1.35em;
      max-width: 1080px;

      p {
        margin: 5px 0 25px 0;
      }

      h3,
      a {
        text-transform: uppercase;
        font-weight: 500;
        font-family: effra, sans-serif;
        font-size: 0.85em;
        margin: 0;
      }

      @media (min-width: 925px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .project-copy {
          max-width: 620px;
          margin-left: 30px;
        }
      }
    }
  }
`
