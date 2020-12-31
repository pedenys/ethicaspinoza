import React, { useState } from "react"
import css from "styled-jsx/css"
import {
  useVisibilityContext,
  VisibilityContextState,
} from "../context/VisibilityContext"
import CloseMenuIcon from "./icons/Close.icon"
import MenuIcon from "./icons/Menu.icon"
import MoonIcon from "./icons/Moon.icon"
import SunIcon from "./icons/Sun.icon"
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
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleClickOnToggleVisibility = (
    field: keyof Omit<VisibilityContextState, "toggleVisiblity">
  ) => (event) => {
    event.stopPropagation()
    toggleVisibility(field)
  }

  function switchTheme() {
    const currentTheme = document.documentElement.dataset.theme
    console.log({ currentTheme })

    if (currentTheme === "dark") {
      document.documentElement.dataset.theme = "light"
      setIsDarkTheme(false)
    } else {
      document.documentElement.dataset.theme = "dark"
      setIsDarkTheme(true)
    }
  }

  return (
    <>
      <div className="menu-icon menu-icon_theme" onClick={switchTheme}>
        {isDarkTheme ? <SunIcon /> : <MoonIcon />}
      </div>
      <div
        className="menuContainer"
        onClick={() => toggleMenu((prev) => !prev)}
      >
        <div className="menu-icon">
          {showMenu ? <CloseMenuIcon /> : <MenuIcon />}
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
      </div>
      <style jsx>{menuStyles}</style>
    </>
  )
}

const menuStyles = css`
  .menuContainer {
  }
  .menu-icon {
    cursor: pointer;
    height: auto;
    position: fixed;
    right: 15px;
    top: 20px;
    z-index: 2;
  }
  .menu-icon_theme {
    right: 45px;
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
