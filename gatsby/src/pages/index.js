import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import SEO from "../components/SEO"

const IndexPage = ({ data }) => {
  const [thisWeek, setThisWeek] = useState([])

  useEffect(() => {
    const now = new Date()
    now.setTime(now.getTime() - now.getTimezoneOffset() * 6000) // adjusts for ISO
    const today = now.getDate()

    // finds two dates seven days apart in YYYY-MM-DD format
    const [gt_date, lte_date] = [today, today + 7].map(date => {
      now.setDate(date - process.env.GATSBY_OFFSET_DAYS)
      return now.toISOString().split("T")[0]
    })

    const isInDateRange = game => game.date > gt_date && game.date <= lte_date

    const games = data.games.nodes.filter(game => isInDateRange(game))
    setThisWeek(games)
  }, [])

  return (
    <>
      <SEO title="Home" />
      <p>index</p>
      <p>there {thisWeek.length} games</p>
      <ul>
        {thisWeek.map(game => (
          <li key={game.id}>
            {game.away} @ {game.home}
          </li>
        ))}
      </ul>
    </>
  )
}

export const query = graphql`
  query {
    games: allSanityGame(sort: { fields: [date, time], order: [ASC, ASC] }) {
      nodes {
        id
        week
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
