import {render} from 'react-dom'
import React from 'react'
import {onPageLoad} from 'meteor/server-render'
import App from '/imports/startup/router'

Meteor.startup(() => {
        onPageLoad(async sink => {
                //here comes client initializations
                render(
                    <App />,
                    document.getElementById('root')
                )
        })
})