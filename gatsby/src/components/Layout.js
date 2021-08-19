import React from "react"
import "@fontsource/graduate"
import "normalize.css"
import styled, { createGlobalStyle } from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

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
    /* font-family: Helvetica, Arial, sans-serif; */
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    --radius: 8px;
    --h2top: 15px;
    @media (max-width: 400px) {
      background-color: var(--white);
      --radius: 0;
      --h2top: 5px;
    }
  }
  .Diamond {
    background-color: #3c85c4;
    color: white;
  }
  .LEMONHEADS {
    background-color: #e5bf2e;
  }
  .GasVills {
    background-color: #6aa94d;
    color: white;
  }
  .TBW {
    background-color: #e06665;
    color: black;
  }
  .offscreen {
    position: absolute;
    left: -9999em;
  }
  h1, h2, h3, h4, h5, h6, .heading-font {
    font-family: "Graduate";
  }
  h2 {
    text-align:center;
    margin-top: var(--h2top);
  }
  h3 {
    color: var(--darkgrey);
    border-bottom: 1px solid var(--litegrey);
    margin-top:30px;
  }
`

const ContentStyles = styled.div`
  max-width: 800px;
  min-width: 340px;
  margin: 20px auto;
  background-color: var(--white);
  border-radius: var(--radius);
  padding: 10px;
  @media (min-width: 600px) {
    width: 500px;
    padding: 30px;
    padding-top: 10px;
  }
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
