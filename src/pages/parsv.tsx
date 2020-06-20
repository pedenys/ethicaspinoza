import React from "react"
import json from "../../source/FR/appuhn/parsv.json"
import Axioma from "../components/text/Axioma"
import Praefatio from "../components/text/Praefatio"
import Propositio from "../components/text/Propositio"

const ParsV: React.FC = () => {
  return (
    <>
      <h1>Partie V</h1>

      {/* Praefatio */}
      <Praefatio pars="5" txt={json.praefatio} />

      {/* Axioma */}
      {Array.from({ length: 2 }, (_, i) => (
        <Axioma index={i + 1} pars="5" txt={json.axioma[i + 1]} />
      ))}

      {/* Propositio */}
      {Array.from({ length: 42 }, (_, i) => (
        <div
          className="propositioContainer"
          key={i.toString() + json.propositio[i + 1][0]}
        >
          <Propositio index={i + 1} pars={"3"} txt={json.propositio[i + 1]} />
          {/* 
            getDemonstratioArray(json.demonstratio, i + 1).map((txt, index) => (
              <Demonstratio txt={txt} key={txt[0] + index.toString()} />
            ))} */}
        </div>
      ))}
    </>
  )
}

export default ParsV
