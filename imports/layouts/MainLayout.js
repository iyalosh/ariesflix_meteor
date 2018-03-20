import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'
//Pages
import LandingPage from '/imports/pages/LandingPage'
import NotFoundPage from '/imports/pages/NotFoundPage'
//components
import Navbar from '/imports/components/Navbar'

export default class MainLayout extends Component {
    state = {}

    render() {
        return (
            <Grid stackable>
                <Grid.Column width={16}>
                    <Navbar />
                </Grid.Column>
                <Grid.Column width={16}>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="*" component={NotFoundPage}/>
                </Grid.Column>
            </Grid>
        )
    }
}