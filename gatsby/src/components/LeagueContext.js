import { graphql, useStaticQuery } from "gatsby"
import React, { createContext, useEffect, useState } from "react"

export const LeagueContext = createContext()

export const LeagueProvider = ({ children }) => {
  const [ranks, setRanks] = useState(["foo"])
  const [weeks, setWeeks] = useState(["bar"])

  const data = useStaticQuery(graphql`
    query {
      games: allSanityGame(
        sort: { fields: [date, time], order: [ASC, ASC] }
        filter: { winner: { ne: "" } }
      ) {
        nodes {
          away
          home
          winner
        }
      }
    }
  `)

  useEffect(() => {
    const played = data.games.nodes
    // console.log(games)
    console.log(played.length)

      const empty = () => ({ gp: 0, win: 0, loss: 0, tie: 0 })
      const results = played.reduce((total, game) => {
      if (!total[game.away]) total[game.away] = empty()
      if (!total[game.home]) total[game.home] = empty()
      let away_result = "tie",
        home_result = "tie"
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
      total[game.away][away_result]++
      total[game.home][home_result]++
      return total
    }, {})
    for (const [team, result] of Object.entries(results)) {
      result.pts = result.win * 2 + result.tie
    }
    let standings = Object.keys(results).map(key => ({
      name: key,
      record: results[key],
    }))
    standings.sort((a, b) => b.record.pts - a.record.pts)

    setRanks(standings)


  }, [])

  // const num = 5
  return (
    <LeagueContext.Provider value={{ ranks, weeks }}>
      {children}
    </LeagueContext.Provider>
  )
}
