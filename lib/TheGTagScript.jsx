/**
 * TheGTagScript component
 */
'use strict'

import React from 'react'

const TheGTagScript = function TheGTagScriptImpl ({
                                          trackingId
                                        }) {
  return [
    <script key='s1'
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}>
    </script>,
    <script key='s2'
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${trackingId}');
`
            }}>
    </script>
  ]
}

export default TheGTagScript
