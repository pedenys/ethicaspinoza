import React, { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface DemonstratioInterface {
  index: number
  pars: string
  txt: string
}

const Demonstratio: React.FC<DemonstratioInterface> = ({
  index,
  pars,
  txt,
}) => {
  const { showDemonstratio } = useContext(VisibilityContext)
  return (
    showDemonstratio && (
      <div id={`pars${pars}-demonstratio${index}`}>
        <h3>Démonstration {index + 1}</h3>
        <p dangerouslySetInnerHTML={{ __html: txt }} />
      </div>
    )
  )
}

export default Demonstratio
