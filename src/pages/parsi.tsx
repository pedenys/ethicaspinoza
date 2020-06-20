import React from "react"
import json from "../../source/FR/appuhn/parsi.json"
import Appendix from "../components/text/Appendix"
import Axioma from "../components/text/Axioma"
import Definitio from "../components/text/Definitio"
import Propositio from "../components/text/Propositio"

const ParsI: React.FC = () => {
  const pars = "1"
  return (
    <>
      <h1>Partie I</h1>

      {/* Definitio */}
      {Array.from({ length: 8 }, (_, i) => (
        <Definitio index={i + 1} pars={pars} txt={json.axioma[i + 1]} />
      ))}

      {/* Axioma */}
      {Array.from({ length: 7 }, (_, i) => (
        <Axioma index={i + 1} pars={pars} txt={json.axioma[i + 1]} />
      ))}

      {/* Propositio */}
      {Array.from({ length: 36 }, (_, i) => (
        <div
          className="propositioContainer"
          key={i.toString() + json.propositio[i + 1][0]}
        >
          <Propositio index={i + 1} pars={pars} txt={json.propositio[i + 1]} />
          {/* 
            getDemonstratioArray(json.demonstratio, i + 1).map((txt, index) => (
              <Demonstratio txt={txt} key={txt[0] + index.toString()} />
            ))} */}
        </div>
      ))}

      <Appendix pars={pars} txt={json.appendix} />
    </>
  )
}

export default ParsI
