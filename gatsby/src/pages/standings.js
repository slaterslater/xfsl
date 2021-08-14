import React, { useContext } from "react"
import SEO from "../components/SEO"
import { LeagueContext } from "../components/LeagueContext"
// import Standings from "../components/Standings"

const StandingsPage = () => {
  // const games = data.games.nodes

  const { ranks } = useContext(LeagueContext)
  console.log("STANDINGS FROM CONTEXT", ranks)
  return (
    <>
      <SEO title="Standings" />
      {/* <p>Standings page</p> */}
      <table>
        <tr>
          <th>Rank</th>
          <th>Team</th>
          <th>GP</th>
          <th>W</th>
          <th>L</th>
          <th>T</th>
          <th>PTS</th>
        </tr>
        {ranks.map((team, i) => (
          <tr>
            <td>{i+1}</td>
            <td>{team.name}</td>
            <td>{team.record.gp}</td>
            <td>{team.record.win}</td>
            <td>{team.record.loss}</td>
            <td>{team.record.tie}</td>
            <td>{team.record.pts}</td>
          </tr>
        ))}
      </table>
      
    </>
  )
}

export default StandingsPage