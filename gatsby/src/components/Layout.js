import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import "normalize.css"
import Footer from "./Footer"
import Header from "./Header"

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --blue: #041e42;
    --red: #bf0e3e;
    --slate: #333333;
    --litegrey: #ececec;
    --grey: #999999;
    --darkgrey: #666666;
  }
  html, body, #___gatsby, #gatsby-focus-wrapper{
    margin: 0;
    width:100%;
    height: 100%;
    background-color: var(--litegrey);
    color: var(--slate);
    display: flex;
    flex-direction: column;
    font-family: Helvetica, Arial, sans-serif;
    --radius: 8px;
    @media (max-width: 400px) {
      background-color: var(--white);
      --radius: 0;
    }
  }
  .Diamond {
    background-color: #3c85c4;
    color: var(--white)
  }
  .LEMONHEADS {
    background-color: #e5bf2e;
  }
  .GasVills {
    background-color: #6aa94d;
    color: purple;
  }
  .TBW {
    background-color: #e06665;
  }
  .offscreen {
    position: absolute;
    left: -9999em;
  }
  h2 {
    text-align:center;
  }
  h3 {
    color: var(--darkgrey);
    border-bottom: 1px solid var(--litegrey);
  }
`

const ContentStyles = styled.div`
  max-width: 800px;
  min-width: 350px;
  margin: 20px auto;
  background-color: var(--white);
  border-radius: var(--radius);
  padding: 5px;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContentStyles>{children}</ContentStyles>
      <Footer />
    </>
  )
}

export default Layout
