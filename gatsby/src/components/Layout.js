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
  }
  html, body, #___gatsby, #gatsby-focus-wrapper{
    margin: 0;
    width:100%;
    height: 100%;
    background-color: var(--litegrey);
    display: flex;
    flex-direction: column;
    font-family: Helvetica, Arial, sans-serif;
  }
`

const ContentStyles = styled.div`
  max-width: 800px;
  min-width: 350px;
  margin: 0 auto;
  background-color: var(--white);
  /* height: 100%; */
  /* display: flex;
  flex-direction: column; */
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
