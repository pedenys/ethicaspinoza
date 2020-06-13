import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

const Lemma = () => {
  const { showLemma } = useContext(VisibilityContext)
  return showLemma && <div></div>
}

export default Lemma
