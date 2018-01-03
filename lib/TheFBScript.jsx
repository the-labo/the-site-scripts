/**
 * TheFBScript component
 */
'use strict'

import React from 'react'

const TheFBScript = function TheFBScriptImpl ({
                                          appId,
                                          version = 'v2.11',
                                          locale = 'en_US'
                                        }) {
  return [
    <script key='s1'
            dangerouslySetInnerHTML={{
              __html: `
window.fbReadyQueue = []
window.fbAsyncInit = function() {
  FB.init({
    appId            : '${appId}',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : '${version}'
  });
  while(fbReadyQueue.length > 0) {
    const callback = fbReadyQueue.shift()
    callback(FB)
  }
  fbReadyQueue.push = (callback) => callback(FB)
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.async = 1
  js.src = 'https://connect.facebook.net/${locale}/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
`
            }}/>
  ]
}

export default TheFBScript