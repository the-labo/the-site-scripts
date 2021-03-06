/**
 * TwitterScript component
 */
'use strict'

import React from 'react'

class TheTWTTRScript extends React.Component {
  render () {
    return (
      <div dangerouslySetInnerHTML={{
        __html: `
<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));</script>
`,
      }}>

      </div>
    )
  }
}

export default TheTWTTRScript
