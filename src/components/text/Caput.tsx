import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface CaputProps {
  txt: string
  index: string
}

const Caput: React.FC<CaputProps> = ({ index, txt }) => {
  const { showCaput } = useContext(VisibilityContext)
  return (
    showCaput && (
      <div>
        <h3>Chapitre {index}</h3>
        <p>{txt}</p>
      </div>
    )
  )
}

export default Caput
