import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';
import OrderItem from './OrderItem';
import moment from 'moment';

export default class CustomerOrder extends Component {
  state = {
    order: []
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8000/api/order/" + this.props.match.params.id, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'auth': localStorage.getItem('token')
      }
    });
    var order = await response.json();
    order = order.map(customerOrder => {
      var total = 0;
      customerOrder.items_list.map(item => {
        total += item.price;
      })
      customerOrder.total = total;
      customerOrder.createdAt = moment(new Date(customerOrder.createdAt)).format('DD-MM-YYYY HH:mm');
      return customerOrder;
    })
    this.setState(() => ({ order }))
  }

  render() {
    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>State</th>
              <th>Items</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Created_at</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.order.map(order => <OrderItem key={order._id} order={order} />)
            }
          </tbody>
        </Table>
      </Container>
    )
  }
}
