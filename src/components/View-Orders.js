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




class ViewOrders extends React.Component {
    render = () =>
    <>
        <NavBar />

       <h1>Thank you for choosing Bruce's Diner</h1> 
        <div>
        <Table responsive="md">
          <thead>
            <tr>
              <th>#</th>
              <th>Food Ordered</th>
              <th>Ordered By</th>
              <th>Order Placed At</th>
  
      
            </tr>
          </thead>
          <tbody>
            {this.props.orders.map(order =>
              <tr>
                <td>{order.quantity}</td>
                <td>{order.item}</td>
                <td>gabi456</td>
                <td>04/08/2020 2:34pm</td>
              </tr>)}
          </tbody>
        </Table>
        
      </div>
      </>
}

export default ViewOrders
