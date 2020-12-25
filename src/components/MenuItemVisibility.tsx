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
      <li onClick={onClick}>
        {selected ? <Checked /> : <Unchecked />}
        &nbsp;
        <span
          style={
            selected
              ? null
              : {
                  textDecoration: "line-through",
                }
          }
        >
          {label}
        </span>
      </li>
      <style jsx>{menuItemVisibilityStyles}</style>
    </>
  )
}

const menuItemVisibilityStyles = css`
  li {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem;
    padding: 0 1rem;
    width: 100%;
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
