import React from "react"

const VisibilityContext = React.createContext({
  showDemonstratio: true,
})

export const VisibilityProvider = VisibilityContext.Provider
export const VisibilityConsumer = VisibilityContext.Consumer

export default VisibilityContext
