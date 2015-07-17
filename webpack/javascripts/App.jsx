var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var Nav = require('react-bootstrap/lib/Nav');
var Navbar = require('react-bootstrap/lib/Navbar');
var NavItem = require('react-bootstrap/lib/NavItem');
var DropdownButton = require('react-bootstrap/lib/DropdownButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');

class Navigation extends React.Component {
    render() {
        return (<Navbar brand='Jinx' inverse toggleNavKey={0}>
            <Nav right eventKey={0}> {/* This is the eventKey referenced */}
                <NavItem eventKey={1} href='#'>Link!</NavItem>
                <NavItem eventKey={2} href='#'>Link</NavItem>
                <DropdownButton eventKey={3} title='Dropdown'>
                    <MenuItem eventKey='1'>Action</MenuItem>
                    <MenuItem eventKey='2'>Another action</MenuItem>
                    <MenuItem eventKey='3'>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey='4'>Separated link</MenuItem>
                </DropdownButton>
            </Nav>
        </Navbar>);
    }

}

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <Button bsStyle='success'>Hi!</Button>
            </div>
        );
    }
}