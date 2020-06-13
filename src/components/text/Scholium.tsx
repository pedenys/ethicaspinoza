import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

const Scholium = () => {
  const { showScholium } = useContext(VisibilityContext)
  return showScholium && <div></div>
}

export default Scholium
