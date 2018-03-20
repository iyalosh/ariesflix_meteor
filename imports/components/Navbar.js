import React, {Component} from 'react';
import {Menu, Dropdown} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
    state = {}

    render() {
        const {username} = this.props
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
                <Dropdown item text={username ? username:'LOGIN'}>
                    <Dropdown.Menu>
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Dropdown.Item>Déconnexion</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
        )
    }

}