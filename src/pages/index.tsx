import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  margin: 2rem;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.blue};
`

const Home = () => {
  return <Title>Hello world !</Title>
}

export default Home
