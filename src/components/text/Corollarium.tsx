import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface CorollariumProps {
  index: number
  pars: string
  txt: string
}

const Corollarium: React.FC<CorollariumProps> = ({ index, pars, txt }) => {
  const { showCorollarium } = useContext(VisibilityContext)
  return (
    showCorollarium && (
      <div id={`pars${pars}-corollarium${index}`}>
        <h3>Corollaire ${index + 1}</h3>
        <p dangerouslySetInnerHTML={{ __html: txt }} />
      </div>
    )
  )
}

export default Corollarium
