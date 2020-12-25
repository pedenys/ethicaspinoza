import React from "react"
import json from "../../source/FR/appuhn/parsi.json"
import Appendix from "../components/text/Appendix"
import Axioma from "../components/text/Axioma"
import Definitio from "../components/text/Definitio"
import Propositio from "../components/text/Propositio"

const pars = "1"
const { appendix, axioma, definitio, propositio } = json
const arrayOfAppendix = Object.values(appendix)
const arrayOfAxioma = Object.values(axioma)
const arrayOfDefinitio = Object.values(definitio)
const arrayOfPropositio = Object.values(propositio)

const ParsI: React.FC = () => {
  return (
    <>
      <h1>Partie I</h1>

      {/* Definitio */}
      {arrayOfDefinitio.map((_, i) => {
        return i === arrayOfDefinitio.length - 1 ? (
          <div className="last-item">
            <Definitio index={i} pars={pars} txt={json.definitio[i + 1]} />
          </div>
        ) : (
          <Definitio index={i} pars={pars} txt={json.definitio[i + 1]} />
        )
      })}

      {/* Axioma */}
      {arrayOfAxioma.map((_, i) => {
        return i === arrayOfAxioma.length - 1 ? (
          <div className="last-item">
            <Axioma index={i + 1} pars={pars} txt={json.axioma[i + 1]} />
          </div>
        ) : (
          <Axioma index={i + 1} pars={pars} txt={json.axioma[i + 1]} />
        )
      })}

      {arrayOfPropositio.map((_, i) => {
        return i === arrayOfPropositio.length - 1 ? (
          <div
            className="propositioContainer last-item"
            key={i.toString() + json.propositio[i + 1][0]}
          >
            <Propositio index={i} pars={pars} txt={json.propositio[i + 1]} />
            {/* 
            getDemonstratioArray(json.demonstratio, i + 1).map((txt, index) => (
              <Demonstratio txt={txt} key={txt[0] + index.toString()} />
            ))} */}
          </div>
        ) : (
          <div
            className="propositioContainer"
            key={i.toString() + json.propositio[i + 1][0]}
          >
            <Propositio index={i} pars={pars} txt={json.propositio[i + 1]} />
            {/* 
            getDemonstratioArray(json.demonstratio, i + 1).map((txt, index) => (
              <Demonstratio txt={txt} key={txt[0] + index.toString()} />
            ))} */}
          </div>
        )
      })}

      <Appendix pars={pars} txt={json.appendix} />
    </>
  )
}

export default ParsI
