/**
 * TheGTagScript component
 */
'use strict'

import React from 'react'

const TheGTagScript = function TheGTagScriptImpl ({
                                                    trackingId,
                                                  }) {
  return [
    <script async
            key='s1'
            src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}>
    </script>,
    <script dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${trackingId}', {'send_page_view': false});
`,
            }}
            key='s2'>
    </script>
  ]
}

export default TheGTagScript
