'use strict'

import React from 'react'

function TheAMZAdScript ({
                           region,
                           trackingId,
                           type,
                         }) {
  const Script = TheAMZAdScript[type]
  if (!Script) {
    console.warn('[TheAMZAdScript]Unknown type', type)
    return null
  }
  return <Script {...{region, trackingId}} />
}

Object.assign(TheAMZAdScript, {
  SearchWidget ({
                  region,
                  trackingId,
                }) {
    return [
      <script dangerouslySetInnerHTML={{
                __html: `
amzn_assoc_ad_type ="responsive_search_widget";
amzn_assoc_tracking_id ="${trackingId}";
amzn_assoc_marketplace ="amazon";
amzn_assoc_region ="${region}";
amzn_assoc_placement ="";
amzn_assoc_search_type = "search_widget";
amzn_assoc_width ="auto";
amzn_assoc_height ="auto";
amzn_assoc_default_search_category ="";
amzn_assoc_default_search_key ="";
amzn_assoc_theme ="light";amzn_assoc_bg_color ="FFFFFF";`,
              }}
              key='s1'>
      </script>,
      <script async
              key='s2'
              src={`//z-fe.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=${region}`}>
      </script>
    ]
  },
})

export default TheAMZAdScript
