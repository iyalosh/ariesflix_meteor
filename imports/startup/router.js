import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <p> LANDING PAGE </p>}/>
                    <Route exact path="/greetings" render={() => <p>GREETINGS</p>}/>
                </Switch>
            </Router>
        )
    }
}
