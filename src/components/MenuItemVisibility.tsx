import React from "react"
import { colors } from "../styling/ds"
import Checked from "./icons/RadioButtonChecked.icon"
import Unchecked from "./icons/RadioButtonUnchecked.icon"
import css from "styled-jsx/css"

interface MenuItemVisibilityProps {
  label: string
  onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
  selected?: boolean
}

const MenuItemVisibility: React.FC<MenuItemVisibilityProps> = ({
  label,
  onClick,
  selected,
}) => {
  return (
    <>
      <li
        onClick={onClick}
        style={
          selected
            ? { backgroundColor: colors.orange }
            : { backgroundColor: "inherit" }
        }
      >
        {selected ? <Checked /> : <Unchecked />}
        &nbsp;{label}
      </li>
      <style jsx>{menuItemVisibilityStyles}</style>
    </>
  )
}

const menuItemVisibilityStyles = css`
  li {
    margin: 1rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    display: inline-block;
  }
  svg {
    padding-top: 10px;
  }
  @media (orientation: landscape) {
    li {
      font-size: 4vh;
    }
  }
  @media (orientation: portrait) {
    li {
      font-size: 3vh;
    }
  }
`

export default MenuItemVisibility
