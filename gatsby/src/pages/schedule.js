import React, { useContext } from "react"
import { LeagueContext } from "../components/LeagueContext"
import SEO from "../components/SEO"

const SchedulePage = () => {
  const { weeks } = useContext(LeagueContext)

  return (
    <>
      <SEO title="Schedule" />
      <p>Schedule of {weeks}</p>
    </>
  )
}

export default SchedulePage
