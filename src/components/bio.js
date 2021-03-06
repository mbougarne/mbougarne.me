/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  let authorName = author.name;
  let summary = author.summary || '';
  let { twitter, linkedIn, gitHub } = social;

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/avatar.jpg"
        width={60}
        height={60}
        quality={100}
        alt="مراد بوكرن"
      />
      {authorName && (
        <p>
          <strong>{authorName}</strong> {summary}
          {` `}
          <a href={`https://twitter.com/${twitter}`}>
            غرد معي
          </a>
          <a href={`https://github.com/${linkedIn}`}>
            برامج
          </a>
          <a href={`https://linked.com/${gitHub}`}>
            لينكدان
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
