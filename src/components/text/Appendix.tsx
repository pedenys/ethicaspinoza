import Caput, { CaputProps } from "@atoms/Caput"
import { useContext } from "react"
import VisibilityContext from "../../context/VisibilityContext"

interface AppendixProps {
  caputs?: Array<CaputInterface>
  pars: string
  txt: string
}

const Appendix: React.FC<AppendixProps> = ({ caputs, pars, txt }) => {
  const { showAppendix } = useContext(VisibilityContext)
  return (
    showAppendix && (
      <div>
        <h2>Appendice</h2>
        <p
          id={`pars${pars}-appendix`}
          dangerouslySetInnerHTML={{ __html: txt }}
        />
        {caputs &&
          caputs.map((caput) => (
            <Caput
              index={Number(caput.caputIndex)}
              pars={pars}
              txt={caput.txt}
              key={caput.txt[0] + caput.caputIndex.toString()}
            />
          ))}
      </div>
    )
  )
}

export default Appendix
