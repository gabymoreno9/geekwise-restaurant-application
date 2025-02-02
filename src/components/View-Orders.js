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



function ViewOrders (props) {
    return <>
        <NavBar />

       <h1>Thank you for choosing Bruce's Diner</h1> 
        <div>
        <Table responsive="md">
          <thead>
            <tr>
              <th><h2>#</h2></th>
              <th><h2>Food Ordered</h2></th>
              <th><h2>Ordered By</h2></th>
              <th><h2>Order Placed At</h2></th>
              <th><h2>Edit</h2></th>
            </tr>
          </thead>

          <tbody>
            {props.orders.map(order =>
              <tr key={order.id}>
                <td>{order.quantity}</td>
                <td>{order.item}</td>
                <td>gabi456</td>
                <td>04/08/2020 2:34pm</td>
                <td> <Button variant="danger"  onClick={() => props.handleDeleteFromOrder(order.id)}>Delete</Button> </td>
              </tr>)}
          </tbody>
        </Table>
        
      </div>
    </>
}

export default ViewOrders
