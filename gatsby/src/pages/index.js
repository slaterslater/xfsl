import { graphql, Link } from "gatsby"
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
    const isThisWeek = game => game.date > day(0) && game.date <= day(7)
    const games = data.games.nodes.filter(game => isThisWeek(game))
    setThisWeek({
      date: games[0].date,
      name: games[0].name,
      games,
    })
  }, [data])

  return (
    <>
      <SEO title="Home" />
      <h2>{dayjs(thisWeek?.date).format("MMMM D")}</h2>
      <h3>{thisWeek?.name}</h3>
      <TableStyles>
        <thead>
          <tr>
            <th className="offscreen">Time</th>
            <th>Away</th>
            <th>Home</th>
          </tr>
        </thead>
        <tbody>
          {thisWeek.games?.map(game => (
            <tr key={game.id}>
              <td className="th">{game.time}</td>
              <td className={game.away}>{game.away}</td>
              <td className={game.home}>{game.home}</td>
            </tr>
          ))}
        </tbody>
      </TableStyles>
      <h3>XFSL Standings</h3>
      <TableStyles>
        <tr>
          <th className="offscreen">Position</th>
          <th>TEAM</th>
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
        {ranking.map((team, i) => (
          <tr className={team.name}>
            <td className="th">
              {i + 1}
              <sup>{position[i]}</sup>
            </td>
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

export const query = graphql`
  query {
    games: allSanityGame(sort: { fields: [date, time], order: [ASC, ASC] }) {
      nodes {
        id
        name
        date
        time
        away
        home
        winner
      }
    }
  }
`

export default IndexPage
