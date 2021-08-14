import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Nav from "./Nav"
import Logo from "../images/xfsl-logo.png"
import { Link } from "@reach/router"

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  padding: 15px 0;
`

const Header = () => {
  return (
    <HeaderStyles>
      <Link to="/">
        <img src={Logo} alt="logo" width="80" height="40" />
      </Link>
      <Nav />
    </HeaderStyles>
  )
}

export default Header
