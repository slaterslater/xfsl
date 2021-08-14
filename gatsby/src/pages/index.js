import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import dayjs from 'dayjs'
import SEO from "../components/SEO"

const IndexPage = ({ data }) => {
  const [thisWeek, setThisWeek] = useState([])

  useEffect(() => {
    const day = num => dayjs().day(num).format('YYYY-MM-DD')
    const isThisWeek = game => game.date > day(0) && game.date <= day(7)
    const games = data.games.nodes.filter(game => isThisWeek(game))
    setThisWeek(games)
  }, [])

  return (
    <>
      <SEO title="Home" />
      <h2>{dayjs(thisWeek[0]?.date).format('MMMM D')}</h2>
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
