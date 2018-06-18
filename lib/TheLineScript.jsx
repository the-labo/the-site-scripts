/**
 * TheLineScript component
 */
'use strict'
import React from 'react'

class TheLineScript extends React.Component {
  render () {
    return (
      <script async='async'
              defer='defer'
              src='https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js'/>
    )
  }
}

module.exports = TheLineScript
