import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const NavStyles = styled.nav`
  width: 100%;
  ul {
    max-width: 700px;
    padding: 0;
    margin: 0 auto;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  li {
    width: 115px;
    text-align: center;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--litegrey);
  }
`

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <Link className="heading-font" to="/">
          This Week
        </Link>
      </li>
      <li>
        <Link to="/">
          <StaticImage
            src={"../images/xfsl-logo.png"}
            width={80}
            height={40}
            alt="xfsl logo"
          />
        </Link>
      </li>
      <li>
        <Link className="heading-font" to="/schedule">
          Schedule
        </Link>
      </li>
    </ul>
  </NavStyles>
)

export default Nav
