import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, editItem } from '../store/actions/item';
import { addMenuItem, deleteMenuItem } from '../store/actions/menu';
import ItemItem from './ItemItem';
import ItemForm from './ItemForm';
import { Collapse, Button, CardBody, Card, Col, Row, Container } from 'reactstrap';
import '../index.css';


export class ItemList extends Component {
  state = {
    selectedItem: {},
    displayForm: false
  }

  addItem = async (param) => {
    try {
      const response = await fetch("http://localhost:8000/api/item", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('token')
        },
        body: JSON.stringify(param)
      });
      const data = await response.json();
      this.props.addItem({ ...data, ...param });
    } catch (err) {
      console.log(err);
    }
  };


  editItem = async (param) => {
    const response = await fetch("http://localhost:8000/api/item/edit/" + param._id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token')
      },
      body: JSON.stringify(param)
    });
    const data = await response.json();
    this.props.editItem(data);
    this.setState(() => ({ selectedItem: {} }));
  };

  onSelectedItem = (selectedItem) => {
    this.setState(() => ({ selectedItem: {} }), () => {
      this.setState(() => ({ selectedItem }))
    });
  };

  render() {
    return (
      <Container className='itemListContainer'>
        <Button style={{ width: '150px', backgroundColor: '#52BC42' }} onClick={() => {
          this.setState((prevState) => {
            return {
              displayForm: !prevState.displayForm
            }
          })
        }} className='addItem'>Add New Item</Button>
        {
          this.state.displayForm &&
          <div className='itemListForm'>
            <ItemForm onSubmit={(item) => this.addItem(item)} />
            {
              this.state.selectedItem._id && <ItemForm onSubmit={item => this.editItem(item)} selectedItem=
                {this.state.selectedItem} />
            }
          </div>
        }

        <div>
          <Row>
            {
              this.props.items.map((item) => <ItemItem key={item._id} item={item} onSelectedItem={this.onSelectedItem} />)
            }
          </Row>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (data) => {
      dispatch(addItem(data));
    },
    editItem: (data) => {
      dispatch(editItem(data));
    },
    addMenuItem: (data) => {
      dispatch(addMenuItem(data));
    },
    deleteMenuItem: (data) => {
      dispatch(deleteMenuItem(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)

