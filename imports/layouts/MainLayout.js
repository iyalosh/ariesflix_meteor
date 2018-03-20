import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'
//Pages
import LandingPage from '/imports/pages/LandingPage'
import NotFoundPage from '/imports/pages/NotFoundPage'
import SignupPage from '/imports/pages/SignupPage'
//components
import Navbar from '/imports/components/Navbar'

export default class MainLayout extends Component {
    state = {}

    render() {
        return (
            <Grid stackable>
                <Navbar />
                <Grid.Column className="main-container" width={16}>
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                        <Route exact path="/signup" component={SignupPage} />
                        <Route path="*" component={NotFoundPage}/>
                    </Switch>
                </Grid.Column>
            </Grid>
        )
    }
}