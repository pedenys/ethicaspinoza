import Caput from "@atoms/Caput"
import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface AppendixProps {
  caputs?: Array<{ caputIndex: string; txt: string }>
  txt: string
}

const Appendix: React.FC<AppendixProps> = ({ caputs, txt }) => {
  const { showAppendix } = useContext(VisibilityContext)
  return (
    showAppendix && (
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
  )
}

export default Appendix
