import React from "react"
import Layout from "./src/components/Layout"
import { LeagueProvider } from "./src/components/LeagueContext"

export const wrapPageElement = ({ element, props }) => (
  <Layout>{element}</Layout>
)

export const wrapRootElement = ({ element }) => (
  <LeagueProvider>{element}</LeagueProvider>
)
