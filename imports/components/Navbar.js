import React, {Component} from 'react';
import {Menu, Dropdown} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import { withTracker } from 'meteor/react-meteor-data'

class Navbar extends Component {
    state = {}
    logout = () => Meteor.logout()
    render() {
        const {user} = this.props
        return (
            <Menu
            size="big"
            borderless
            secondary
            fixed="top"
            className="aries-navbar"
            style={{
            backgroundColor: !this.props.transparent
                ? "#E50914"
                : "none"
        }}>
            <Link to="/">
                <Menu.Item header position="left" className="aries-navbar-item">ARIES FLIX</Menu.Item>
            </Link>
            <Link to="/greetings">
                <Menu.Item header style={{fontWeight: '100'}} position="left" className="aries-navbar-item">Remerciements</Menu.Item>
            </Link>            
            <Menu.Menu position='right'>
                {user ?
                <Dropdown item text={user.username}>
                    <Dropdown.Menu>
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Dropdown.Item onClick={this.logout}>Déconnexion</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                :
                <Link to="/signup">
                    <Menu.Item header style={{fontWeight: '100'}} position="left" className="aries-navbar-item">Inscription</Menu.Item>
                </Link>
                }
            </Menu.Menu>
        </Menu>
        )
    }

}

export default NavbarContainer = withTracker(() => {
  return {
      user: Meteor.user()
  }
})(Navbar)