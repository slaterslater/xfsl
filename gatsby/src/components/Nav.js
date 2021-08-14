import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NavStyles = styled.nav`
  width: 100%;
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
  }
  li {
    padding-top: 15px;
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
        <Link to="/schedule">Schedule</Link>
      </li>
      <li>
        <Link to="/">This Week</Link>
      </li>
      <li>
        <Link to="/standings">Standings</Link>
      </li>
    </ul>
  </NavStyles>
)

export default Nav
