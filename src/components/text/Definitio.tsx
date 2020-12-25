import React, { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface DefinitioInterface {
  index: number
  pars: string
  txt: string
  type?: "affectuumGeneralisDefinitio" | "affectuumDefinitiones"
}

const Definitio: React.FC<DefinitioInterface> = ({
  index,
  pars,
  txt,
  type,
}) => {
  const { showDefinitio } = useContext(VisibilityContext)
  return (
    showDefinitio && (
      <div
        id={
          type === "affectuumGeneralisDefinitio"
            ? `pars${pars}-definitioAffectuumGeneralisDefinitio`
            : type === "affectuumDefinitiones"
            ? `pars${pars}-definitioAffectuumDefinitio${index}`
            : `pars${pars}-definitio${index}`
        }
        className="textContainer"
      >
        {type !== "affectuumGeneralisDefinitio" && (
          <h2>définition·{index + 1}</h2>
        )}
        {txt.includes("<p>") ? (
          <div dangerouslySetInnerHTML={{ __html: txt }} />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: txt }} />
        )}
      </div>
    )
  )
}

export default Definitio
