/**
 * TheFBScript component
 */
'use strict'

import React from 'react'

const TheFBScript = function TheFBScriptImpl ({
                                                appId,
                                                version = 'v2.11',
                                                locale = 'en_US',
                                                callbackName = 'withFB'
                                              }) {
  if (!appId) {
    throw new Error(`appId is required`)
  }
  return [
    <script key='s1'
            dangerouslySetInnerHTML={{
              __html: `
function withFBImpl (callback) {
  if(withFBImpl.loaded){
    callback(window.FB)
  } else {
    withFBImpl.queue.push(callback)
  }
};
withFBImpl.loaded = false;
withFBImpl.queue = [];
window.fbAsyncInit = function fbAsyncInitImpl() {
  FB.init({
    appId            : '${appId}',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : '${version}'
  });
  withFBImpl.loaded = true;
  while(withFBImpl.queue.length){
    var callback = withFBImpl.queue.shift()
    callback && callback(window.FB)
  };
};
window['${callbackName}'] = withFBImpl;

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