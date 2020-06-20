import React, { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface PraefatioInterface {
  pars: string
  txt: string
}

const Praefatio: React.FC<PraefatioInterface> = ({ pars, txt }) => {
  const { showPraefatio } = useContext(VisibilityContext)
  return (
    showPraefatio && (
      <div id={`pars${pars}-praefatio`}>
        <h2>Préface</h2>
        <p dangerouslySetInnerHTML={{ __html: txt }} />
      </div>
    )
  )
}

export default Praefatio
