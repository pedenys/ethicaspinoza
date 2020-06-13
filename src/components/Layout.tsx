import globalStyles from "styling/global"
import Menu from "./Menu"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="globalContainer">{children}</div>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}

export default Layout
