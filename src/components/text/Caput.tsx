import React from "react"

interface CaputProps {
  txt: string
  index: string
}

const Caput: React.FC<CaputProps> = ({ index, txt }) => {
  return (
    <div>
      <h3>Chapitre {index}</h3>
      <p>{txt}</p>
      <style jsx>
        {`
          h3 {
            font-size: 20px;
            font-weight: 400;
          }
          p {
            font-size: 16px;
            font-weight: 300;
          }
        `}
      </style>
    </div>
  )
}

export default Caput
