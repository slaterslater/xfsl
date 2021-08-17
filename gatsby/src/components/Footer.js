import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  background-color: var(--slate);
  color: var(--grey);
  width: 100%;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid black;
  box-shadow: 0px 5px 5px var(--slate) inset;
`

const Footer = () => (
  <FooterStyles>
    <p>Xtremely Friendly Softball League {new Date().getFullYear()}</p>
  </FooterStyles>
)

export default Footer
