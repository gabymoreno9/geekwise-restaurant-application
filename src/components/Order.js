import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';

import NavBar from './Navbar';
import Button from 'react-bootstrap/Button';
import logo2 from "../images/logo2.png"
import { withRouter } from "react-router-dom";


const menuItems = [
  "Tacos De Papa (Includes sides of rice and pinto beans)",
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
          orders: this.state.orders.concat ([{ item: menuItems[this.state.orderItem], quantity: this.state.orderQuantity }])
        })

    handleSubmitOrder = () => {
      this.props.handleSubmitOrder(this.state.orders)
      this.props.history.push("/view-order")
    }
 
    render = () =>
      <>
        <NavBar />
        <Dropdown onSelect={value => this.setState({ orderItem: value })}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {menuItems[this.state.orderItem] || "I'd like to order..."}
            </Dropdown.Toggle>
        
            <Dropdown.Menu as={CustomMenu}>
                {menuItems.map((item, index) =>
                  <Dropdown.Item key={index} eventKey={index}>{item}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>

        <DropdownButton
          size="sm"
          variant="secondary"
          title={this.state.orderQuantity || "Quantity"}
          onSelect={value => this.setState({ orderQuantity: value })}>
          <Dropdown.Item eventKey="1">1</Dropdown.Item>
          <Dropdown.Item eventKey="2">2</Dropdown.Item>
          <Dropdown.Item eventKey="3">3</Dropdown.Item>
        </DropdownButton>
    
        <Button variant="dark" onClick={this.handleAddToOrder}>Add to Order</Button>
        <br/>
        <br/>
    
        <Button variant="success" onClick={this.handleSubmitOrder}>Submit Order</Button>
        <br/>
        <br/>
        <div>
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Food Ordered</th>
            <th>Ordered By</th>
            <th>Order Placed At</th>
            <th>Delete Order</th>
          </tr>
        </thead>
        <tbody>
          {this.state.orders.map(order =>
            <tr>
              <td>{order.quantity}</td>
              <td>{order.item}</td>
              <td>gabi456</td>
              <td>Table cell</td>
              <td> <Button variant="danger">Delete</Button> </td>
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
