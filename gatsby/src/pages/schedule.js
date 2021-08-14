import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import SEO from "../components/SEO"

const SchedulePage = ({data}) => {
    const [season, setSeason] = useState({})

   useEffect(()=>{
    const weeks = data.games.nodes.reduce((season, game) => {
      let week = season[season.length -1]
      if (week?.date != game.date) {
        week = {
          week : game.week,
          date : game.date,
          games : [game]
        }
        season.push(week)
      } else {
        week.games.push(game)
      }
      return season
    }, [])
    setSeason(weeks)
  },[])
  
  return (
    <>
      <SEO title="Schedule" />
      <p>Schedule of {season.length} weeks</p>
    </>
  )
}

export default SchedulePage

export const query = graphql`
query {
  games: allSanityGame(sort: {fields: [date, time], order: [ASC, ASC]}) {
    nodes {
      away
      home
      winner
      id
      time
      week
      date
    }
  }
}
`