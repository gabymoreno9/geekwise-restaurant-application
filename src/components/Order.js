import uuid from 'uuid/v4'
import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withRouter } from "react-router-dom";

import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const menuItems = [
  "Tacos De Papa",
  "Hamburger with Fries",
  "Chicken Tenders with Fries",
  "Quesadilla de Asada",
  "Agua De Jamaica"
]


class Order extends React.Component {
    state = {
      orderItem: null,
      orderQuantity: null,
      orders: []
    }

    handleAddToOrder = () =>
        this.setState({
          orderItem: null,
          orderQuantity: null,
          orders: this.state.orders.concat ([
            { id: uuid(), item: menuItems[this.state.orderItem], quantity: this.state.orderQuantity }
          ])
        })

    handleDeleteFromOrder = idToDelete =>
        this.setState({
          orders: this.state.orders.filter (order => order.id !== idToDelete)
        })

    handleSubmitOrder = () => {
      this.props.handleSubmitOrder(this.state.orders)
      this.props.history.push("/view-order")
    }
 
    render = () =>
      <>
        <NavBar />

        <Row>
        <Col xs="12" md="3">
            <Dropdown onSelect={value => this.setState({ orderItem: value })}>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    {menuItems[this.state.orderItem] || "I'd like to order..."}
                </Dropdown.Toggle>
            
                <Dropdown.Menu as={CustomMenu}>
                    {menuItems.map((item, index) =>
                      <Dropdown.Item key={index} eventKey={index}>{item}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
        </Col>

        <Col xs="12" md="3">
            <DropdownButton
              size="sm"
              variant="secondary"
              title={this.state.orderQuantity || "Quantity"}
              onSelect={value => this.setState({ orderQuantity: value })}>
              <Dropdown.Item eventKey="1">1</Dropdown.Item>
              <Dropdown.Item eventKey="2">2</Dropdown.Item>
              <Dropdown.Item eventKey="3">3</Dropdown.Item>
            </DropdownButton>
        </Col>
    
        <Col xs="12" md="3">
          <Button variant="dark" onClick={this.handleAddToOrder}>Add to Order</Button>
        </Col>
    
        <Col xs="12" md="3">
          <Button variant="success" onClick={this.handleSubmitOrder}>Submit Order</Button>
        </Col>
        </Row>

      <div>
        <br/>
      <Table responsive="md">
        <thead>
          <tr>
            <th><h2>#</h2></th>
            <th><h2>Order Placed At</h2></th>
            <th><h2>Ordered By</h2></th>
            <th><h2>Order Placed At</h2></th>
            <th><h2>Delete Order</h2></th>
          </tr>
        </thead>
        <tbody>
          {this.state.orders.map(order =>
            <tr>
              <td>{order.quantity}</td>
              <td>{order.item}</td>
              <td>gabi456</td>
              <td>04/08/2020 2:34pm</td>
              <td> <Button variant="danger"  onClick={() => this.handleDeleteFromOrder(order.id)}>Delete</Button> </td>
            </tr>)}
        </tbody>
      </Table>
      
    </div>
      </>
}



// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) =>
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>)
  
  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = React.useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}>
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}/>
          
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              child => !value || child.props.children.toLowerCase().startsWith(value))}
          </ul>
        </div>
      );
    });


export default withRouter(Order)
