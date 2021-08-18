import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)
  return (
    <Helmet>
      <html lang="en" />
      <title>
        {title ? title + " - " : ""}
        {site.siteMetadata.title}
      </title>
      {/* Fav icons  */}
      <link rel="alternate icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      {/* Meta tags  */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph  */}
      <meta property="og:url" content={site.siteMetadata.siteUrl} key="ogurl" />
      <meta property="og:image" content={"/favicon.svg"} key="ogimage" />
      <meta
        property="og:title"
        content={site.siteMetadata.title}
        key="ogtitle"
      />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={site.siteMetadata.description}
        key="ogdescription"
      />
    </Helmet>
  )
}
