import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

const Axioma = () => {
  const { showAxioma } = useContext(VisibilityContext)
  return showAxioma && <div></div>
}

export default Axioma
