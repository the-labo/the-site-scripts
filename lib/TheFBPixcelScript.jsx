/**
 * TheFBPixcelScript component
 */
'use strict'

import React from 'react'

class TheFBPixcelScript extends React.Component {
  render () {
    const {
      locale = 'en_US',
      pixcelId,
      version = '2.0',
    } = this.props
    if (!pixcelId) {
      throw new Error(`pixcelId is required`)
    }
    return [
      (
        <script dangerouslySetInnerHTML={{
          __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='${version}';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/${locale}/fbevents.js');
        fbq('init', '${pixcelId}');
        `,
        }}
                key='s01'>
        </script>
      ),
    ]
  }
}

export default TheFBPixcelScript
