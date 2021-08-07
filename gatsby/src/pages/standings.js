
import { graphql } from "gatsby"
import React, { useContext } from "react"
import SEO from "../components/SEO"
import Standings from "../components/standings"

const StandingsPage = ({data}) => {
  const games = data.games.nodes
  return (
  <>
    <SEO title="Home" />
    <p>Standings page</p>
    <Standings games={games} />
  </>
)
  }

export default StandingsPage

export const query = graphql`
query {
  games: allSanityGame(filter: {winner: {ne: "[]"}}) {
    nodes {
      _id
      home
      winner
      away
    }
  }
}
`