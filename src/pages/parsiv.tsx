import React from "react"
import json from "../../source/FR/appuhn/parsiv.json"
import Propositio from "../components/text/Propositio"
import Demonstratio from "../components/text/Demonstratio"
import Appendix from "../components/text/Appendix"
import Praefatio from "../components/text/Praefatio"
import css from "styled-jsx/css"

const ParsIv = () => {
  const getDemonstratioArray = (i: number) => {
    return json.demonstratio.reduce<Array<string>>((arrayOfTxt, dem) => {
      if (dem.propositioId === i.toString()) {
        arrayOfTxt.push(dem.txt)
      }
      return arrayOfTxt
    }, [])
  }

  return (
    <>
      <h1>Partie IV</h1>
      <Praefatio txt={json.praefatio} />
      {/* Propositio */}
      {Array.from({ length: 73 }, (_, i) => (
        <div
          className="propositioContainer"
          key={i.toString() + json.propositio[i + 1][0]}
        >
          <Propositio
            id={(i + 1).toString()}
            pars={"3"}
            txt={json.propositio[i + 1]}
          />
          {getDemonstratioArray(i + 1).map((txt, index) => (
            <Demonstratio txt={txt} key={txt[0] + index.toString()} />
          ))}
        </div>
      ))}
      {/* Appendix */}
      <Appendix txt={json.appendix.txt} caputs={json.appendix.caputs} />
      <style jsx>{parsIiiStyle}</style>
    </>
  )
}

const parsIiiStyle = css`
  .propositioContainer {
    margin-bottom: 5rem;
  }
`

export default ParsIv
