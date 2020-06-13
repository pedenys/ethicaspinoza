import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

const Demonstratio = ({ txt }) => {
  const { showDemonstratio } = useContext(VisibilityContext)
  return (
    showDemonstratio && (
      <div>
        <h3>Démonstration</h3>
        <p>{txt}</p>
      </div>
    )
  )
}

export default Demonstratio
