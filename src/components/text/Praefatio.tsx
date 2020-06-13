import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface PraefatioProps {
  txt: string
}

const Praefatio: React.FC<PraefatioProps> = ({ txt }) => {
  const { showPraefatio } = useContext(VisibilityContext)
  return (
    showPraefatio && (
      <div>
        <h2>Préface</h2>
        <div dangerouslySetInnerHTML={{ __html: txt }}></div>
      </div>
    )
  )
}

export default Praefatio
