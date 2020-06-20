import React, { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface LemmaInterface {
  index: number
  pars: string
  txt: string
}

const Lemma: React.FC<LemmaInterface> = ({ index, pars, txt }) => {
  const { showLemma } = useContext(VisibilityContext)
  return (
    showLemma && (
      <div id={`pars${pars}-lemma${index}`}>
        <h3>Lemme {index + 1}</h3>
        <p dangerouslySetInnerHTML={{ __html: txt }} />
      </div>
    )
  )
}

export default Lemma
