import React from 'react'
import Mailchimp from 'react-mailchimp-form'

const EmailSignup = () => (
  <Mailchimp
    action="https://stocktake.us10.list-manage.com/subscribe/post?u=088aad37e2c8191ca244afbf1&amp;id=d3cc658ad9"
    fields={[
      {
        name: 'EMAIL',
        placeholder: 'Email',
        type: 'email',
        required: true,
      },
    ]}
    className="email-form"
  />
)

export default EmailSignup
