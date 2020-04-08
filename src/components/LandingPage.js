import React from 'react'
import Button from 'react-bootstrap/Button';
import burger from '../images/burger.jpeg';
import { withRouter } from "react-router-dom";


class LandingPage extends React.Component {
  render = () =>
    <header className="App-header" style={{ backgroundImage:`url(${burger})` }}>
        <p>
        Welcome to Bruce's Diner
        </p>

        <Button variant="secondary" onClick={() => this.props.history.push('/login')}>Login</Button>
    </header>
}


export default withRouter(LandingPage)
