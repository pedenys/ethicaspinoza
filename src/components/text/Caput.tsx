interface CaputProps {
  txt: string
  index: string
}

const Caput: React.FC<CaputProps> = ({ index, txt }) => {
  return (
    <div>
      <h3>Chapitre {index}</h3>
      <p>{txt}</p>
    </div>
  )
}

export default Caput
