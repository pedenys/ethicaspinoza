import Caput from "@atoms/Caput"

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
    </div>
  )
}

export default Appendix
