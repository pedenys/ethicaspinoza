import React from "react"
import { colors } from "../styling/ds"
import Tick from "./IconTick"
import Circle from "./IconCircle"
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
        {selected ? <Tick /> : <Circle />}
        &nbsp;{label}
      </li>
      <style jsx>{menuItemVisibilityStyles}</style>
    </>
  )
}

const menuItemVisibilityStyles = css`
  li {
    margin: 1rem 0;
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
