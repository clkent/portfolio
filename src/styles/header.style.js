import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 30px 100px 30px;
  font-family: effra, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;

  h1 {
    font-family: gastromond, sans-serif;
    font-weight: 400;
    margin-bottom: 10px;
    font-size: 1.75em;
  }

  p {
    font-family: effra, sans-serif;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.5px;
    margin: 0;
  }

  .side-nav {
    display: flex;
    position: relative;
    right: -79px;
    padding: 0;
    margin: 0;

    text-transform: uppercase;
    list-style: none;
    font-size: 0.75em;
    transform: rotate(90deg);
    transform-origin: left top 0;

    a {
      float: left;
      text-align: left;
      color: #000;
    }
  }
`
