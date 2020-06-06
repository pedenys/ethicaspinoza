import React from "react"
import json from "../../source/FR/misrahi/parsiii.json"
import Propositio from "../components/text/Propositio"
import Demonstratio from "../components/text/Demonstratio"

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
      {Array.from({ length: 73 }).map((item, index) => (
        <>
          <Propositio
            id={index + 1}
            pars={3}
            txt={json.propositio[index + 1]}
          />
          {getDemonstratioArray(index + 1).map((txt) => (
            <Demonstratio txt={txt} />
          ))}
        </>
      ))}
    </div>
  )
}

export default ParsIII
