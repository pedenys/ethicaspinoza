import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

export interface CaputProps {
  index: number
  pars: string
  txt: string
}

const Caput: React.FC<CaputProps> = ({ index, pars, txt }) => {
  const { showCaput } = useContext(VisibilityContext)
  return (
    showCaput && (
      <div id={`pars${pars}-caput${index}`}>
        <h3>Chapitre {index + 1}</h3>
        <p dangerouslySetInnerHTML={{ __html: txt }} />
      </div>
    )
  )
}

export default Caput
