import css from "styled-jsx/css"
import { colors } from "./ds"

export default css.global`
  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${colors.beige};
    color: #333;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.8;
    margin: 0;
    padding: 0;
  }

  .globalContainer {
    margin: 2rem 3rem;
  }

  h1 {
    color: #111;
    font-size: 4rem;
    font-weight: normal;
    margin: 0 0 1rem 0;
  }

  h2 {
    color: #111;
    font-size: 2.4rem;
    font-weight: normal;
    letter-spacing: 0.2rem;
    margin: 0;
  }

  h3 {
    color: #222;
    font-size: 2rem;
    font-weight: normal;
    margin: 0;
  }

  h4 {
    color: #222;
    font-weight: bold;
    font-size: 1.8rem;
    margin: 0;
  }

  p {
    font-weight: 300;
    font-size: 1.8rem;
    margin: 0 0 1rem 0;
    line-height: 1.5;
  }

  .propositioContainer {
    margin-bottom: 1rem;
  }

  .textContainer {
    margin-bottom: 2rem;
  }
  [id*="axioma"]::after,
  [id*="caput"]::after,
  [id*="definitio"]::after,
  [id*="propositio"]::after {
    display: block;
    content: "";
    height: 2px;
    width: 72px;
    background-color: #333;
  }

  [id*="axioma"]::after {
    background-color: ${colors.orange};
  }
  [id*="caput"]::after {
    background-color: ${colors.green};
  }
  [id*="definitio"]::after {
    background-color: ${colors.yellow};
  }
  [id*="propositio"]::after {
    background-color: ${colors.green};
  }

  @media screen and (min-width: 768px) {
    .globalContainer {
      margin: 4rem auto;
      max-width: 800px;
    }
  }
`
