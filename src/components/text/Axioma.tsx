import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface AxiomaInterface {
  index: number
  pars: string
  txt: string
}

const Axioma: React.FC<AxiomaInterface> = ({ index, pars, txt }) => {
  const { showAxioma } = useContext(VisibilityContext)
  return (
    showAxioma && (
      <div id={`pars${pars}-axioma${index}`}>
        <h2>axiome·{index}</h2>
        <p dangerouslySetInnerHTML={{ __html: txt }} />
      </div>
    )
  )
}

export default Axioma
