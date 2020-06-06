import React from "react"

const Demonstratio = ({ txt }) => {
  return (
    <div>
      <h3>Démonstration</h3>
      <p>{txt}</p>

      <style jsx>
        {`
          h3 {
            font-size: 20px;
            font-weight: 400;
            color: #333;
          }
          p {
            font-size: 16px;
            font-weight: 300;
            color: #555;
          }
        `}
      </style>
    </div>
  )
}

export default Demonstratio
