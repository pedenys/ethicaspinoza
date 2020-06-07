import globalStyles from "styling/global"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div className="globalContainer">{children}</div>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}

export default Layout
