import React from 'react'
import EmailSignup from './EmailSignup'
import config from '../../config'
export default function Footer() {
  return (
    <div id="footer">
      <div className="container medium">
        <header className="major last">
          <h2>Would you like to get updates about Stocktake?</h2>
        </header>
        <EmailSignup />

        <ul className="icons">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social
            return (
              <li key={url}>
                <a href={url} className={`icon ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="copyright">
          <li>&copy; Stocktake. All rights reserved.</li>
        </ul>
      </div>
    </div>
  )
}
