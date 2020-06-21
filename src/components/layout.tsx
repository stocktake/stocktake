import React, { FC, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery, withPrefix } from 'gatsby'

import '../assets/sass/main.scss'

const Layout: FC = ({ children }) => {
  const [isPreloaded, setIsPreloaded] = useState(true)
  let timeoutId: any

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsPreloaded(false)
    }, 100)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [timeoutId])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Stocktake' },
          { name: 'keywords', content: 'site, web, stocktake' },
        ]}
      >
        <script src={withPrefix('drift.js')} type="text/javascript" />
        <html lang="en" />
      </Helmet>
      <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
        {children}
      </div>
    </>
  )
}

export default Layout
