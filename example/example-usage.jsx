'use strict'

import React from 'react'
import { GAScript, FBScript } from 'the-site-scripts'

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <div>
        <FBScript appId={`__yout_facebook_app_id`}/>
        <GTagScript trackingId={`__your_ga_tracking`}/>
      </div>

    )
  }
}

export default ExampleComponent
