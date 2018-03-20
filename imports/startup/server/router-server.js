import React                    from "react"
import { onPageLoad }           from "meteor/server-render"
import { renderToString }       from "react-dom/server"
import { ServerStyleSheet }     from "styled-components"
import {
  StaticRouter as Router,
  Route,
  Switch
}                               from 'react-router-dom'
import MainLayoutServer         from "/imports/layouts/MainLayoutServer"

onPageLoad(sink => {
  let browser = sink.request.browser.name
  browser = browser.toLowerCase()

  const context = {}
  const sheet = new ServerStyleSheet()

  const path = sink.request.url.path

  console.log("MAIN LAYOUT SERVER");

    let htmlString = renderToString(
      sheet.collectStyles(
        <Router
          location={ path }
          context={ context }>
          <Switch>
            <Route component={ MainLayoutServer } path="/"/>
          </Switch>
        </Router>
      )
    )

    sink.renderIntoElementById("root", htmlString)
    sink.appendToHead(sheet.getStyleTags());
})
