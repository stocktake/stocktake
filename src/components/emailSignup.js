import React from "react"

const EmailSignup = () => (
  <>
    <div id="mc_embed_signup">
      <form
        action="https://stocktake.us10.list-manage.com/subscribe/post?u=088aad37e2c8191ca244afbf1&amp;id=d3cc658ad9"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <label for="mce-EMAIL">Subscribe for updates</label>
          <input
            type="email"
            value=""
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <div id="mc_input_stuff" aria-hidden="true">
            <input
              type="text"
              name="b_088aad37e2c8191ca244afbf1_d3cc658ad9"
              tabindex="-1"
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  </>
)

export default EmailSignup
