import React from "react"
import styled from "styled-components"
import Nav from "./Nav"
import { Link } from "@reach/router"

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  padding: 15px 0;
  border-bottom: 1px solid black;
  box-shadow: 0 5px 5px 0 var(--grey);
`

const Header = () => {
  return (
    <HeaderStyles>
      <Link to="/">
        <h1 className='offscreen'>Xtremely Friendly Softball League</h1>
        
      </Link>
      <Nav />
    </HeaderStyles>
  )
}

export default Header
