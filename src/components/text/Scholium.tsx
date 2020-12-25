import React, { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface ScholiumInterface {
  index: number
  pars: string
  txt: string
}

const Scholium: React.FC<ScholiumInterface> = ({ index, pars, txt }) => {
  const { showScholium } = useContext(VisibilityContext)
  return (
    showScholium && (
      <div id={`pars${pars}-scholium${index}`}>
        <h2>scholie·{index + 1}</h2>
        <p dangerouslySetInnerHTML={{ __html: txt }} />
      </div>
    )
  )
}

export default Scholium
