import React, { useState } from "react"
import css from "styled-jsx/css"
import {
  useVisibilityContext,
  VisibilityContextState,
} from "../context/VisibilityContext"
import MenuItemVisibility from "./MenuItemVisibility"
import CloseMenuIcon from "./icons/Close.icon"
import OpenMenuIcon from "./icons/Menu.icon"
import { colors } from "../styling/ds"

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
      <div className="arrow">
        {showMenu ? <CloseMenuIcon /> : <OpenMenuIcon />}
      </div>
      {showMenu && (
        <div className="innerMenuContainer">
          <h2>Filtres</h2>
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
  .menuContainer {
  }
  .arrow {
    position: fixed;
    top: 0;
    right: 3rem;
    font-size: 7rem;
    z-index: 2;
  }
  .innerMenuContainer {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    min-height: 100vh;
  }
  h2 {
    font-size: 10rem;
    margin: 2rem 0 1rem 0;
    line-height: 1;
    text-align: center;
  }
  ul {
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    justify-items: center;
    align-content: center;
    margin: 0 auto;
  }
`

export default Menu
