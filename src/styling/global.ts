import css from "styled-jsx/css"

export default css.global`
  html {
    font-size: 62.5%;
  }
  body {
    color: #333;
    font-family: "PT Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8;
    margin: 0;
    padding: 0;
  }
  .globalContainer {
    margin: 4rem 2rem;
  }
  h1 {
    color: #111;
    font-weight: 800;
    font-size: 3.2rem;
  }
  h2 {
    color: #111;
    font-weight: 600;
    font-size: 2.6rem;
  }
  h3 {
    color: #222;
    font-weight: 500;
    font-size: 1.8rem;
  }
  h4 {
    color: #222;
    font-weight: 500;
    font-size: 1.6rem;
  }
  p {
    font-weight: 300;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 768px) {
    .globalContainer {
      margin: 4rem auto;
      max-width: 1200px;
      width: 100%;
    }
  }
`
