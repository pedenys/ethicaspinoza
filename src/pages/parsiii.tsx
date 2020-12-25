import React from "react"
import json from "../../source/FR/appuhn/parsiii.json"
import Axioma from "../components/text/Axioma"
import Praefatio from "../components/text/Praefatio"
import Propositio from "../components/text/Propositio"
import Definitio from "../components/text/Definitio"
import Postulatum from "../components/text/Postulatum"

const ParsIii = () => {
  const pars = "3"
  return (
    <>
      <h1>Partie V</h1>
      <Praefatio pars={pars} txt={json.praefatio} />

      {/* Definitio */}
      {Array.from({ length: 3 }, (_, i) => (
        <Definitio index={i + 1} pars={pars} txt={json.definitio[i + 1]} />
      ))}

      {/* Postulatum */}
      {Array.from({ length: 3 }, (_, i) => (
        <Postulatum index={i + 1} pars={pars} txt={json.postulatum[i + 1]} />
      ))}

      {/* Propositio */}
      {Array.from({ length: 59 }, (_, i) => (
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

      {/* Affectuum Definitiones */}
      <h2>Définition des affects</h2>
      {Array.from({ length: 48 }, (_, i) => (
        <Definitio
          type="affectuumDefinitiones"
          index={i + 1}
          pars={pars}
          txt={json.affectuumDefinitiones.definitio[i + 1]}
        />
      ))}
      <h2>Définition générale des affects</h2>
      <Definitio
        type="affectuumGeneralisDefinitio"
        index={1}
        pars={pars}
        txt={json.affectuumDefinitiones.affectuumGeneralisDefinitio}
      />
    </>
  )
}

export default ParsIii
