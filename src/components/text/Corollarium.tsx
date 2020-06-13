import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

const Corollarium = () => {
  const { showCorollarium } = useContext(VisibilityContext)
  return showCorollarium && <div></div>
}

export default Corollarium
