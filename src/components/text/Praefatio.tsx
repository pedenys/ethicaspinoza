import React from "react"
interface PraefatioProps {
  txt: string
}

const Praefatio: React.FC<PraefatioProps> = ({ txt }) => {
  return (
    <div>
      <h3>Préface</h3>
      <p dangerouslySetInnerHTML={{ __html: txt }}></p>
      <style jsx>{`
        p {
          font-size: 16px;
          font-weight: 300;
        }
      `}</style>
    </div>
  )
}

export default Praefatio
