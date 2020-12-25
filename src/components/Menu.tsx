import React, { useState } from "react"
import css from "styled-jsx/css"
import {
  useVisibilityContext,
  VisibilityContextState,
} from "../context/VisibilityContext"
import CauteIcon from "./icons/Caute.icon"
import CloseMenuIcon from "./icons/Close.icon"
import MenuItemVisibility from "./MenuItemVisibility"

const Menu = () => {
  const {
    toggleVisibility,
    showAppendix,
    showAxioma,
    showCaput,
    showCorollarium,
    showDefinitio,
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
      <div className="menu_icon">
        {showMenu ? <CloseMenuIcon /> : <img src="assets/caute.png" />}
      </div>
      {showMenu && (
        <div className="innerMenuContainer">
          <h4>Filtres</h4>
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
              onClick={handleClickOnToggleVisibility("showDefinitio")}
              selected={showDefinitio}
              label="Definitio"
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
  .menu_icon {
    cursor: pointer;
    height: auto;
    position: fixed;
    right: 15px;
    top: 20px;
    z-index: 2;
  }
  img {
    height: 55px;
    width: 52px;
  }
  .innerMenuContainer {
    background-color: lightyellow;
    bottom: 0;
    left: 0;
    padding: 4rem;
    min-height: 100vh;
    opacity: 0.97;
    position: fixed;
    right: 0;
    top: 0;
  }
  ul {
  }
`

export default Menu
