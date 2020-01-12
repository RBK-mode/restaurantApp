import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Container } from 'reactstrap';
import OrderItem from './OrderItem';

export class OrderList extends Component {
  render() {
    console.log(this.props.orders)
    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th>Created_at</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.orders.map(order => <OrderItem key={order._id} order={order} />)
            }
          </tbody>
        </Table>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders
});

export default connect(mapStateToProps)(OrderList)
