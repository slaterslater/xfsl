import { graphql } from "gatsby"
import React from "react"

import SEO from "../components/SEO"

const IndexPage = ({data}) => { 
  const games = data.games.nodes
  
  return (
  <>
    <SEO title="Home" />
    <p>index</p>
    <p>there {data.games.totalCount} games</p>  
  </>
  )
}

// take a date and return YYYY-MM-DD
const getDateString = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  const [mm, dd] = [month, day].map(num => String(num).padStart(2, '0'))
  return `${date.getFullYear()}-${mm}-${dd}`
}

// get the desired date range
const now = new Date()
const today = now.getDate()
now.setDate(today - 2)
const gt_date = getDateString(now)
now.setDate(today + 7 - 2)
const lte_date = getDateString(now)

export const query = graphql`
  query {
    games: allSanityGame(sort: {order: ASC, fields: date}) {
      totalCount
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
