import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerItem from './CustomerItem';
import { Table, Container } from 'reactstrap';

export class CustomerList extends Component {
  render() {
    console.log(this.props.customers);
    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.customers.map(customer => <CustomerItem key={customer._id} customer={customer} />)
            }
          </tbody>
        </Table>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers
});


export default connect(mapStateToProps)(CustomerList)
