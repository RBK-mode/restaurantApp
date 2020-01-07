import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import './customers.css';

class Home extends Component {

  static propTypes = {
    // getCustomers: PropTypes.func.isRequired,
    // customers: PropTypes.array.isRequired
  }

  static defaultProps = {
    // customers: []
  }

  componentWillMount() {
  }

  render() {

    return (
      <div>
        <h2>Customers</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
})

const dispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, dispatchToProps)(Home);
