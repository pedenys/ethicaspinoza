interface PraefatioProps {
  txt: string
}

const Praefatio: React.FC<PraefatioProps> = ({ txt }) => {
  return (
    <div>
      <h2>Préface</h2>
      <p dangerouslySetInnerHTML={{ __html: txt }}></p>
    </div>
  )
}

export default Praefatio
