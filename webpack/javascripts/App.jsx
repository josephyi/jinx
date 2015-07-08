import React from 'react';
import Button from 'react-bootstrap/lib/Button';
export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Button bsStyle='success'>Hi!</Button>
            </div>
        );
    }
}