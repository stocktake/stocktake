import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div id="main">
      <div className="box container">
        <header className="major">
          <h2>NOT FOUND</h2>
        </header>
        <section>
          <h4>Sorry! It looks like nothing exists at this location.</h4>
        </section>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
