/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styles from 'styled-components'
import Icon from './Icon'

const SocialMediaIcon = styles.button`
  display: inline-block;
  color: #ff3838;
  font-size: 1em;
  margin: 0.25rem;
  padding: 0.25em;
  border: none;
`;

const AuthorSummary = styles.div`
  margin-top: .5rem;
  margin-right: 1rem;
`;

const SocialIcons = styles.p`
  margin-top: .5rem;
`;

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
        <AuthorSummary>
          <strong>{authorName}</strong> {summary}
          <SocialIcons>
            <SocialMediaIcon as="a" href={`https://twitter.com/${twitter}`}>
              <Icon brand name="twitter" />
            </SocialMediaIcon>
            <SocialMediaIcon as="a" href={`https://github.com/${gitHub}`}>
              <Icon brand name="github" />
            </SocialMediaIcon>
            <SocialMediaIcon as="a" href={`https://linkedin.com/${linkedIn}`}>
              <Icon brand name="linkedin" />
            </SocialMediaIcon>
          </SocialIcons>
        </AuthorSummary>
      )}
    </div>
  )
}

export default Bio
