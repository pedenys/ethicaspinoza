import Head from "next/head"

type AppHeadProps = {
  description?: string
  title?: string
}

const AppHead: React.FC<AppHeadProps> = ({ description, title }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="theme-color" content="#EFEFEF"></meta>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500&display=swap"
      rel="stylesheet"
    />
    {/* TODO : add favicons */}
    {/* <link rel="shortcut icon" href="./somewhere" /> */}
    {/* <link rel="apple-touch-icon" href="./somewhere" /> */}
    <link rel="manifest" href="/manifest.json" />
    {/* TODO : update meta description */}
    {description && (
      <meta name="description" content="">
        {description}
      </meta>
    )}
    {title && <title>{title}</title>}
  </Head>
)

export default AppHead
