import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface PropositioProps {
  id: string
  pars: string
  txt: string
}

const Propositio: React.FC<PropositioProps> = ({ id, pars, txt }) => {
  const { showPropositio } = useContext(VisibilityContext)
  return (
    showPropositio && (
      <div id={`pars${pars}-propositio${id}`}>
        <h3>Proposition {id}</h3>
        <p>{txt}</p>
      </div>
    )
  )
}

export default Propositio
