import React, { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface PropositioInterface {
  index: number
  pars: string
  txt: string
}

const Propositio: React.FC<PropositioInterface> = ({ index, pars, txt }) => {
  const { showPropositio } = useContext(VisibilityContext)
  return (
    showPropositio && (
      <div id={`pars${pars}-propositio${index}`}>
        <h2>proposition·{index + 1}</h2>
        <p dangerouslySetInnerHTML={{ __html: txt }} />
      </div>
    )
  )
}

export default Propositio
