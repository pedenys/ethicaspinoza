import React from "react"
import json from "../../source/FR/appuhn/parsiv.json"
import Appendix from "../components/text/Appendix"
import Demonstratio from "../components/text/Demonstratio"
import Praefatio from "../components/text/Praefatio"
import Propositio from "../components/text/Propositio"
import { getDemonstratioArray } from "../helpers"
import Definitio from "../components/text/Definitio"
import Axioma from "../components/text/Axioma"

const ParsIv = () => {
  return (
    <>
      <h1>Partie IV</h1>

      {/* Praefatio */}
      <Praefatio pars="4" txt={json.praefatio} />

      {/* Definitio */}
      {Array.from({ length: 8 }, (_, i) => (
        <Definitio index={i + 1} pars="4" txt={json.definitio[i + 1]} />
      ))}

      {/* Axioma */}
      {Array.from({ length: 1 }, (_, i) => (
        <Axioma index={i + 1} pars="4" txt={json.axioma[i + 1]} />
      ))}

      {/* Propositio */}
      {Array.from({ length: 73 }, (_, i) => (
        <div
          className="propositioContainer"
          key={i.toString() + json.propositio[i + 1][0]}
        >
          <Propositio index={i + 1} pars={"4"} txt={json.propositio[i + 1]} />
          {getDemonstratioArray(json.demonstratio, i + 1).map((txt, index) => (
            <Demonstratio
              index={i + 1}
              pars="4"
              txt={txt}
              key={txt[0] + index.toString()}
            />
          ))}
        </div>
      ))}

      {/* Appendix */}
      <Appendix
        pars="4"
        txt={json.appendix.txt}
        caputs={json.appendix.caputs}
      />
    </>
  )
}

export default ParsIv
