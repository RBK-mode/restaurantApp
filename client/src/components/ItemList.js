import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setItem, addItem, editItem } from '../store/actions/item';
import ItemItem from './ItemItem';
import ItemForm from './ItemForm';


export class ItemList extends Component {
  state = {
    selectedItem: {}
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8000/api/item", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('token')
      },
    });
    const data = await response.json();
    this.props.setItem(data);
  };

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
      console.log(err)
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
      <div>
        <ItemForm onSubmit={(item) => this.addItem(item)} />
        {
          this.state.selectedItem._id && <ItemForm onSubmit={item => this.editItem(item)} selectedItem=
            {this.state.selectedItem} />
        }

        <div>
          {
            this.props.items.map((item) => <ItemItem key={item._id} item={item} onSelectedItem={this.onSelectedItem} />)
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    setItem: (data) => {
      dispatch(setItem(data));
    },
    addItem: (data) => {
      dispatch(addItem(data));
    },
    editItem: (data) => {
      dispatch(editItem(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)

