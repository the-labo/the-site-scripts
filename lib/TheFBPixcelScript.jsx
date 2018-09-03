/**
 * TheFBPixcelScript component
 */
'use strict'

import c from 'classnames'
import React from 'react'

class TheFBPixcelScript extends React.Component {
  render () {
    const {
      className,
      locale = 'en_US',
      pixcelId,
      version = '2.0',
    } = this.props
    if (!pixcelId) {
      throw new Error(`pixcelId is required`)
    }
    return [
      (
        <script className={c('the-fb-pixcel-script', className)}
                dangerouslySetInnerHTML={{
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
        fbq('track', 'PageView');
        `,
                }}
                key='s01'>
        </script>
      ),
      (
        <noscript key='s02'>
          <img height='1'
               src={`https://www.facebook.com/tr?id=${pixcelId}&ev=PageView&noscript=1`}
               width='1'/>
        </noscript>
      )
    ]
  }
}

export default TheFBPixcelScript
