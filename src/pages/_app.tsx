import App from "next/app"
import Layout from "../components/Layout"
import { VisibilityProvider } from "../context/VisibilityContext"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <VisibilityProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </VisibilityProvider>
    )
  }
}

export default MyApp
