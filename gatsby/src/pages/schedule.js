import React, { useContext } from "react"
import { LeagueContext } from "../components/LeagueContext"
import SEO from "../components/SEO"

const SchedulePage = () => {
  const [ranks, weeks] = useContext(LeagueContext)
  return (
  <>
    <SEO title="Home" />
    <p>Schedule {ranks[0]} {weeks[0]}</p>
  </>
)
}

export default SchedulePage
