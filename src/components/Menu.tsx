import React, { useState } from "react"
import css from "styled-jsx/css"
import {
  useVisibilityContext,
  VisibilityContextState,
} from "../context/VisibilityContext"
import MenuItemVisibility from "./MenuItemVisibility"

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

  const handleClickOnToggleVisibility = (
    field: keyof Omit<VisibilityContextState, "toggleVisiblity">
  ) => (event) => {
    event.stopPropagation()
    toggleVisibility(field)
  }

  return (
    <div className="menuContainer" onClick={() => toggleMenu((prev) => !prev)}>
      <div className="arrow">{showMenu ? "-" : "X"}</div>
      {showMenu && (
        <div className="innerMenuContainer">
          <ul>
            <MenuItemVisibility
              onClick={handleClickOnToggleVisibility("showAppendix")}
              selected={showAppendix}
              label="Appendix"
            />
            <MenuItemVisibility
              onClick={handleClickOnToggleVisibility("showAxioma")}
              selected={showAxioma}
              label="Axioma"
            />
            <MenuItemVisibility
              onClick={handleClickOnToggleVisibility("showCaput")}
              selected={showCaput}
              label="Caput"
            />
            <MenuItemVisibility
              onClick={handleClickOnToggleVisibility("showCorollarium")}
              selected={showCorollarium}
              label="Corollarium"
            />
            <MenuItemVisibility
              onClick={handleClickOnToggleVisibility("showDemonstratio")}
              selected={showDemonstratio}
              label="Demonstratio"
            />
            <MenuItemVisibility
              onClick={handleClickOnToggleVisibility("showLemma")}
              selected={showLemma}
              label="Lemma"
            />
            <MenuItemVisibility
              onClick={handleClickOnToggleVisibility("showPropositio")}
              selected={showPropositio}
              label="Propositio"
            />
            <MenuItemVisibility
              onClick={handleClickOnToggleVisibility("showPostulatum")}
              selected={showPostulatum}
              label="Postulatum"
            />
            <MenuItemVisibility
              onClick={handleClickOnToggleVisibility("showPraefatio")}
              selected={showPraefatio}
              label="Praefatio"
            />
            <MenuItemVisibility
              onClick={handleClickOnToggleVisibility("showScholium")}
              selected={showScholium}
              label="Scholium"
            />
          </ul>
        </div>
      )}
      <style jsx>{menuStyles}</style>
    </div>
  )
}

const menuStyles = css`
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
`

export default Menu
