import { graphql, useStaticQuery } from 'gatsby'
import React, { createContext, useState } from 'react'

export const LeagueContext = createContext()

export const LeagueProvider = ({ children }) => {
  const [ranks, setRanks] = useState(['foo']);
  const [weeks, setWeeks] = useState(['bar']);
  const data = useStaticQuery(graphql`
  query {
  games: allSanityGame {
    totalCount
  }
}

`)
  // const num = 5
  return (
    <LeagueContext.Provider value={{ranks, weeks}}>
      {children}
    </LeagueContext.Provider>
  );
}