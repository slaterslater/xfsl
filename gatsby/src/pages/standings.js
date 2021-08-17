import React, { useContext } from "react"
import SEO from "../components/SEO"
import { LeagueContext } from "../components/LeagueContext"
import styled from "styled-components"
import { TableStyles } from "../styles/TableStyles"

const StandingsPage = () => {
  const { ranking } = useContext(LeagueContext)
  return (
    <>
      <SEO title="Standings" />
      <h2>Standings 2021</h2>
      <TableStyles>
        <tr>
          <th><acronym title="position">POS</acronym></th>
          <th>TEAM</th>
          <th><acronym title="games played">GP</acronym></th>
          <th><acronym title="wins">W</acronym></th>
          <th><acronym title="losses">L</acronym></th>
          <th><acronym title="ties">T</acronym></th>
          <th><acronym title="points">PTS</acronym></th>
        </tr>
        {ranking.map((team, i) => (
          <tr className={team.name}>
            <td>{i + 1}</td>
            <td>{team.name}</td>
            <td>{team.record.gp}</td>
            <td>{team.record.win}</td>
            <td>{team.record.loss}</td>
            <td>{team.record.tie}</td>
            <td>{team.record.pts}</td>
          </tr>
        ))}
      </TableStyles>
    </>
  )
}

export default StandingsPage
