import React from 'react'
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import lock from "../images/lock.png";
import user from "../images/user.png";
import logo2 from "../images/logo2.png"



class Login extends React.Component {
  render = () =>
  
    <div className = "login-form">
      <div className = "logo">   <img src={logo2} /> </div>
      <Form>
        <Form.Group>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text><img src= {lock} /></InputGroup.Text>
            </InputGroup.Prepend>

            <Form.Control type="email" placeholder="Enter email" />
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text><img src= {user} /></InputGroup.Text>
            </InputGroup.Prepend>

            <Form.Control type="password" placeholder="Password" />
          </InputGroup>
        </Form.Group>

        <Button variant="primary" onClick={() => this.props.history.push('/order')}>Login</Button>
      </Form>
    </div>
}


export default withRouter(Login)
