import { graphql, useStaticQuery } from "gatsby"
import { resetWarningCache } from "prop-types"
import React, { createContext, useEffect, useState } from "react"

export const LeagueContext = createContext()

export const LeagueProvider = ({ children }) => {
  const [ranking, setRanking] = useState([])

  const data = useStaticQuery(graphql`
    query {
      games: allSanityGame(filter: { winner: { ne: "" } }) {
        nodes {
          name
          away
          home
          winner
        }
      }
    }
  `)

  useEffect(() => {
    const played = data.games.nodes
    const empty = () => ({ gp: 0, win: [], loss: [], tie: [] })
    const results = played.reduce((total, game) => {
      console.log() 
      if (!game.name.toUpperCase().includes('WEEK') || game.winner == "Not Played") return total
      if (!total[game.away]) total[game.away] = empty()
      if (!total[game.home]) total[game.home] = empty()
      let away_result = "tie"
      let home_result = "tie"
      if (game.winner == "Away") {
        away_result = "win"
        home_result = "loss"
      }
      if (game.winner == "Home") {
        away_result = "loss"
        home_result = "win"
      }
      total[game.away].gp++
      total[game.home].gp++
      total[game.away][away_result].push(game.home)
      total[game.home][home_result].push(game.away)
      return total
    }, {})
    let standings = Object.keys(results).map(key => ({
      name: key,
      pts: 2 * results[key].win.length + results[key].tie.length,
      ...results[key],
    }))

    // sort teams based on pts
    // if equal pts, sort on h2h wins
    standings.sort((a, b) => {
      if (a.pts === b.pts) {
        const tiebreaker = (team, opponent) =>
          team.win.filter(loser => loser == opponent.name).length
        return tiebreaker(b, a) - tiebreaker(a, b)
      }
      return b.pts - a.pts
    })
    setRanking(standings)
  }, [data])

  return (
    <LeagueContext.Provider value={{ ranking }}>
      {children}
    </LeagueContext.Provider>
  )
}
