import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

const Postulatum = () => {
  const { showPostulatum } = useContext(VisibilityContext)
  return showPostulatum && <div></div>
}

export default Postulatum
