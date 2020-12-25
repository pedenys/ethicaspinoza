import React from "react"
import Link from "next/link"

const Home = () => {
  return (
    <>
      <h1>Caute world !</h1>
      <ul>
        <li>
          <Link href="/parsi">Pars I</Link>
        </li>
        <li>
          <Link href="/parsii">Pars II</Link>
        </li>
        <li>
          <Link href="/parsiii">Pars III</Link>
        </li>
        <li>
          <Link href="/parsiv">Pars IV</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
