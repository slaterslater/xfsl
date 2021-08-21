import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import SEO from "../components/SEO"
import { TableStyles } from "../styles/TableStyles"

const SchedulePage = ({ data }) => {
  const [season, setSeason] = useState([])

  useEffect(() => {
    const weeks = data.games.nodes.reduce((season, game) => {
      let week = season[season.length - 1]
      if (week?.name !== game.name) {
        week = {
          name: game.name,
          datetime: game.datetime,
          games: [game],
        }
        season.push(week)
      } else {
        week.games.push(game)
      }
      return season
    }, [])
    setSeason(weeks)
  }, [data])

  return (
    <>
      <SEO title="Schedule" />
      <h2>XFSL Season 2021</h2>
      {season.map((week, i) => (
        <div key={`week${i + 1}`} id={`week${i + 1}`}>
          <h3>{dayjs(week.datetime).format('MMMM D')}</h3>
          <TableStyles>
            <thead>
              <tr>
                <th className="offscreen">Time</th>
                <th>Away</th>
                <th>Home</th>
              </tr>
            </thead>
            <tbody>
              {week.games?.map(game => (
                <tr key={game.id}>
                  <td className="th">{dayjs(game.datetime).format('hmm')}</td>
                  <td className={game.away}>{game.away}</td>
                  <td className={game.home}>{game.home}</td>
                </tr>
              ))}
            </tbody>
          </TableStyles>
        </div>
      ))}
    </>
  )
}

export default SchedulePage

export const query = graphql`
  query {
    games: allSanityGame(sort: { fields: datetime, order: ASC }) {
      nodes {
        id
        name
        datetime
        away
        home
        winner
      }
    }
  }
`
