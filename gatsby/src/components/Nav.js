import { Link } from 'gatsby'
import React from 'react'

const Nav = () => (
  <nav>
    <ul>
      <li><Link to='/'>This Week</Link></li>
      <li><Link to='/schedule'>Schedule</Link></li>
      <li><Link to='/standings'>Standings</Link></li>
    </ul>
  </nav>
)

export default Nav