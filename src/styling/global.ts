import css from "styled-jsx/css"
import { colors } from "./ds"

export default css.global`
  :root {
    --bg-color: #f4f1de;
    --darkblue: #3d405b;
    --green: #81b29a;
    --orange: #e07a5f;
    --textColor: #333;
    --yellow: #f2cc8f;
  }

  [data-theme="dark"] {
    --bg-color: #333;
    --darkblue: #3d405b;
    --green: #81b29a;
    --orange: #e07a5f;
    --textColor: #f4f1de;
    --yellow: #f2cc8f;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: var(--bg-color);
    color: var(--textColor);
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.8;
    margin: 0;
    padding: 0;
    transition: background 1s;
  }

  .globalContainer {
    margin: 2rem 3rem;
  }

  h1 {
    color: var(--textColor);
    font-size: 4rem;
    font-weight: normal;
    margin: 0 0 1rem 0;
  }

  h2 {
    color: var(--textColor);
    font-size: 2.4rem;
    font-weight: normal;
    letter-spacing: 0.2rem;
    margin: 0;
  }

  h3 {
    color: var(--textColor);
    font-size: 2rem;
    font-weight: normal;
    margin: 0;
  }

  h4 {
    color: var(--textColor);
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

  a {
    color: var(--textColor);
  }

  [id*="pars"] {
    margin-bottom: 1rem;
  }

  .propositioContainer {
    margin-bottom: 1rem;
  }

  .last-item {
    margin-bottom: 5rem;
  }

  .textContainer {
    margin-bottom: 2rem;
  }
  [id*="axioma"]::after,
  [id*="caput"]::after,
  [id*="definitio"]::after,
  [id*="propositio"]::after {
    background-color: var(--textColor);
    display: block;
    content: "";
    height: 2px;
    width: 72px;
  }

  [id*="axioma"]::after {
    background-color: var(--orange);
  }
  [id*="caput"]::after {
    background-color: var(--green);
  }
  [id*="definitio"]::after {
    background-color: var(--yellow);
  }
  [id*="propositio"]::after {
    background-color: var(--green);
  }

  @media screen and (min-width: 768px) {
    .globalContainer {
      margin: 4rem auto;
      max-width: 800px;
    }
  }
`
