interface PraefatioProps {
  txt: string
}

const Praefatio: React.FC<PraefatioProps> = ({ txt }) => {
  console.log({ txt })
  return (
    <div>
      <h2>Préface</h2>
      <div dangerouslySetInnerHTML={{ __html: txt }}></div>
    </div>
  )
}

export default Praefatio
