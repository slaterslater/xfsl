import { graphql } from "gatsby"
import React, { useEffect, useState, useContext } from "react"
import dayjs from "dayjs"
import SEO from "../components/SEO"
import { LeagueContext } from "../components/LeagueContext"
import { TableStyles } from "../styles/TableStyles"

const IndexPage = ({ data }) => {
  const [thisWeek, setThisWeek] = useState({})
  const { ranking } = useContext(LeagueContext)
  const position = ["st", "nd", "rd", "th"]

  useEffect(() => {
    const day = num => dayjs().day(num).format("YYYY-MM-DD")
    const isThisWeek = date => date > day(0) && date <= day(7)
    const games = data.games.nodes.filter(game => {
      const date = dayjs(game.datetime).format("YYYY-MM-DD")
      return isThisWeek(date)
    })
    setThisWeek({
      date: games[0].datetime,
      name: games[0].name,
      games,
    })
  }, [data])

  return (
    <>
      <SEO />
      <h2>{dayjs(thisWeek?.date).format("MMMM D")}</h2>
      <h3>{thisWeek?.name}</h3>
      <TableStyles>
        <thead>
          <tr>
            <th>
              <span className="offscreen">Time</span>
            </th>
            <th style={{minWidth:'115px'}}>Away</th>
            <th style={{minWidth:'115px'}}>Home</th>
          </tr>
        </thead>
        <tbody>
          {thisWeek.games?.map(game => (
            <tr key={game.id}>
              <td className="th">{dayjs(game.datetime).format("hmm")}</td>
              <td className={game.away}>{game.away}</td>
              <td className={game.home}>{game.home}</td>
            </tr>
          ))}
        </tbody>
      </TableStyles>
      <h3>XFSL Standings</h3>
      <TableStyles>
        <thead>
          <tr>
            <th>
              <span className="offscreen">Position</span>
            </th>
            <th>
              <span className="offscreen">TEAM</span>
            </th>
            <th>
              <acronym title="games played">GP</acronym>
            </th>
            <th>
              <acronym title="wins">W</acronym>
            </th>
            <th>
              <acronym title="losses">L</acronym>
            </th>
            <th>
              <acronym title="ties">T</acronym>
            </th>
            <th>
              <acronym title="points">PTS</acronym>
            </th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((team, i) => (
            <tr className={team.name} key={`team-${team.name}`}>
              <td className="th">
                {i + 1}
                <sup>{position[i]}</sup>
              </td>
              <td>{team.name}</td>
              <td>{team.gp}</td>
              <td>{team.win.length}</td>
              <td>{team.loss.length}</td>
              <td>{team.tie.length}</td>
              <td>{team.pts}</td>
            </tr>
          ))}
        </tbody>
      </TableStyles>
    </>
  )
}

export const query = graphql`
  query {
    games: allSanityGame(sort: { fields: datetime, order: ASC }) {
      nodes {
        id
        name
        datetime
        away
        home
      }
    }
  }
`

export default IndexPage
