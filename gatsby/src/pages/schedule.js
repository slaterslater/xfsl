import React, { useContext } from "react"
import { LeagueContext } from "../components/LeagueContext"
import SEO from "../components/SEO"

const SchedulePage = () => {
  const [ranks, weeks] = useContext(LeagueContext)
  console.log('LEAGUECONTEXT', `${ranks} & ${weeks}`)
  return (
  <>
    <SEO title="Home" />
    <p>Schedule</p>
  </>
)
}

export default SchedulePage
