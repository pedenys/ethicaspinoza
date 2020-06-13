import Document, { Main, NextScript } from "next/document"
import AppHead from "../components/AppHead"

export default class MyDocument extends Document<any> {
  render() {
    return (
      <html>
        <AppHead title="Ethicaspinoza" />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
