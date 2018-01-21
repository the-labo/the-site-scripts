'use strict'

import React from 'react'
import { GlobalKeys } from '@self/conf'
import { asPure } from 'the-hoc'

const TheAMZAdScript = asPure(
  function TheAMZAdScriptImpl ({
                                 type,
                                 trackingId,
                                 region,
                               }) {
    const Script = TheAMZAdScript[type]
    if (!Script) {
      console.warn('[TheAMZAdScript]Unknown type', type)
      return null
    }
    return <Script {...{trackingId, region}} />
  }
)

Object.assign(TheAMZAdScript, {
  SearchWidget: asPure(
    function SearchWidgetImpl ({
                                 trackingId,
                                 region
                               }) {
      return [
        <script key='s1'
                dangerouslySetInnerHTML={{
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
amzn_assoc_theme ="light";amzn_assoc_bg_color ="FFFFFF";`
                }}>
        </script>,
        <script key='s2'
                async
                src={`//z-fe.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=${region}`}>
        </script>
      ]
    }
  )
})

export default TheAMZAdScript