import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'
//Pages
import LandingPage from '/imports/pages/LandingPage'
import SignupPage from '/imports/pages/SignupPage'
import NotFoundPage from '/imports/pages/NotFoundPage'
import SigninPage from '/imports/pages/SigninPage'

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
                        <Route exact path="/signin" component={SigninPage} />
                        <Route path="*" component={NotFoundPage}/>
                    </Switch>
                </Grid.Column>
            </Grid>
        )
    }
}