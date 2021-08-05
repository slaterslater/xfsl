import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <footer>
        XFSL {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default Layout
