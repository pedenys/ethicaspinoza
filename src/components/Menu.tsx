import React, { useState } from "react"
import { useVisibilityContext } from "../context/VisibilityContext"
import css from "styled-jsx/css"
import Tick from "./IconTick"
import Circle from "./IconCircle"

const Menu = () => {
  const {
    toggleVisibility,
    showAppendix,
    showAxioma,
    showCaput,
    showCorollarium,
    showDemonstratio,
    showLemma,
    showPropositio,
    showPostulatum,
    showPraefatio,
    showScholium,
  } = useVisibilityContext()
  const [showMenu, toggleMenu] = useState<boolean>(false)

  return (
    <div className="menuContainer">
      <div className="arrow" onClick={() => toggleMenu((prev) => !prev)}>
        {showMenu ? "-" : "X"}
      </div>
      {showMenu && (
        <div className="innerMenuContainer">
          <ul>
            <li onClick={() => toggleVisibility("showAppendix")}>
              {showAppendix ? <Tick /> : <Circle />}
              &nbsp;Appendix
            </li>
            <li onClick={() => toggleVisibility("showAxioma")}>
              {showAxioma ? <Tick /> : <Circle />}&nbsp;Axioma
            </li>
            <li onClick={() => toggleVisibility("showCaput")}>
              {showCaput ? <Tick /> : <Circle />}&nbsp;Caput
            </li>
            <li onClick={() => toggleVisibility("showCorollarium")}>
              {showCorollarium ? <Tick /> : <Circle />}&nbsp;Corollarium
            </li>
            <li onClick={() => toggleVisibility("showDemonstratio")}>
              {showDemonstratio ? <Tick /> : <Circle />}&nbsp;Demonstratio
            </li>
            <li onClick={() => toggleVisibility("showLemma")}>
              {showLemma ? <Tick /> : <Circle />}&nbsp;Lemma
            </li>
            <li onClick={() => toggleVisibility("showPropositio")}>
              {showPropositio ? <Tick /> : <Circle />}&nbsp;Propositio
            </li>
            <li onClick={() => toggleVisibility("showPostulatum")}>
              {showPostulatum ? <Tick /> : <Circle />}&nbsp;Postulatum
            </li>
            <li onClick={() => toggleVisibility("showPraefatio")}>
              {showPraefatio ? <Tick /> : <Circle />}&nbsp;Praefatio
            </li>
            <li onClick={() => toggleVisibility("showScholium")}>
              {showScholium ? <Tick /> : <Circle />}&nbsp;Scholium
            </li>
          </ul>
        </div>
      )}
      <style jsx>{menuStyles}</style>
    </div>
  )
}

const menuStyles = css`
  .menuContainer {
  }
  .arrow {
    position: fixed;
    top: 0;
    right: 4rem;
    font-size: 10rem;
    z-index: 2;
  }
  .innerMenuContainer {
    background-color: royalblue;
    opacity: 0.8;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    overflow-y: hidden;
  }
  h2 {
    font-size: 10rem;
  }
  ul {
    list-style: none;
  }
  li {
    font-size: 6rem;
  }
  li svg {
    border: 1px solid hotpink;
  }
`

export default Menu
