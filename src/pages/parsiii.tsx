import React from "react"
import json from "../../source/FR/appuhn/parsiii.json"
import Propositio from "../components/text/Propositio"
import Demonstratio from "../components/text/Demonstratio"
import Appendix from "../components/text/Appendix"
import Praefatio from "../components/text/Praefatio"

const ParsIII = () => {
  const getDemonstratioArray = (i: number) => {
    return json.demonstratio.reduce<Array<string>>((arrayOfTxt, dem) => {
      if (dem.propositioId === i.toString()) {
        arrayOfTxt.push(dem.txt)
      }
      return arrayOfTxt
    }, [])
  }

  return (
    <div>
      <Praefatio txt={json.praefatio} />
      {/* Propositio */}
      {Array.from({ length: 73 }).map((item, i) => (
        <span key={i.toString() + json.propositio[i + 1][0]}>
          <Propositio
            id={(i + 1).toString()}
            pars={"3"}
            txt={json.propositio[i + 1]}
          />
          {getDemonstratioArray(i + 1).map((txt, index) => (
            <Demonstratio txt={txt} key={txt[0] + index.toString()} />
          ))}
        </span>
      ))}
      {/* Appendix */}
      <Appendix txt={json.appendix.txt} caputs={json.appendix.caputs} />
    </div>
  )
}

export default ParsIII
