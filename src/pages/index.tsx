import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/seo'

import banner from '../assets/img/devices.svg'
import banner2 from '../assets/img/sync.svg'
import banner3 from '../assets/img/money.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>Technology that works for real businesses</h2>
      </header>

      <div className="box alt container">
        <section className="feature left">
          <a href="/#" className="image icon fa-mobile-alt">
            <img src={banner} alt="" />
          </a>
          <div className="content">
            <h3>No need for expensive hardware</h3>
            <p>Use what you already have. Phones, tables, laptops.</p>
          </div>
        </section>
        <section className="feature right">
          <a href="/#" className="image icon fa-sync">
            <img src={banner2} alt="" />
          </a>
          <div className="content">
            <h3>Your data anywhere</h3>
            <p>
              Work anywhere and have all your records synced across devices. No
              need to use paper and transfer to a computer later. It all happens
              in real time.
            </p>
          </div>
        </section>
        <section className="feature left">
          <a href="/#" className="image icon fa-piggy-bank">
            <img src={banner3} alt="" />
          </a>
          <div className="content">
            <h3>Only pay for what you need</h3>
            <p>
              Download our app and use the free plan as long as you like.
              Upgrade later if you would like to add on more features.
            </p>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
