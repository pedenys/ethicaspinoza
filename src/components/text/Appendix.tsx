import React from "react"
import Caput from "./Caput"

interface AppendixProps {
  caputs?: Array<{ caputIndex: string; txt: string }>
  txt: string
}

const Appendix: React.FC<AppendixProps> = ({ caputs, txt }) => {
  return (
    <div>
      <h2>Appendice</h2>
      <p>{txt}</p>
      {caputs && (
        <div className="caputContainer">
          {caputs.map((caput) => (
            <Caput
              txt={caput.txt}
              index={caput.caputIndex}
              key={caput.txt[0] + caput.caputIndex.toString()}
            />
          ))}
        </div>
      )}
      <style jsx>{`
        h2 {
          font-weight: 500;
          font-size: 24px;
        }
      `}</style>
    </div>
  )
}

export default Appendix
