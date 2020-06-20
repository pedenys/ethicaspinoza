import React, { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface PostulatumInterface {
  index: number
  pars: string
  txt: string
}

const Postulatum: React.FC<PostulatumInterface> = ({ index, pars, txt }) => {
  const { showPostulatum } = useContext(VisibilityContext)
  return (
    showPostulatum && (
      <div id={`pars${pars}-postulatum${index}`}>
        <h3>Postulat {index + 1}</h3>
        <p dangerouslySetInnerHTML={{ __html: txt }} />
      </div>
    )
  )
}

export default Postulatum
