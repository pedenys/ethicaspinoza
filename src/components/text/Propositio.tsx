import React from "react"
import styled from "styled-components"

const PropositioTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #111;
`

const PropositioText = styled.h2`
  font-size: 16px;
  font-weight: 300;
  color: #333;
`
interface PropositioProps {
  id: string
  pars: string
  txt: string
}

const Propositio: React.FC<PropositioProps> = ({ id, pars, txt }) => {
  return (
    <div id={`pars${pars}-propositio${id}`}>
      <PropositioTitle>Proposition {id}</PropositioTitle>
      <PropositioText>{txt}</PropositioText>
      <style jsx>{`
        h2 {
          font-size: 24px;
          font-weight: 500;
          color: #111;
        }
        p {
          font-size: 16px;
          font-weight: 300;
          color: #333;
        }
      `}</style>
    </div>
  )
}

export default Propositio
