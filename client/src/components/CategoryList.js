import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setCategory, addCategory, editCategory} from '../store/actions/cateogry';
import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';


export class CategoryList extends Component {
    state = {
        selectedCategory: {}
    }
    async componentDidMount(){
        const response = await fetch("http://localhost:8000/api/category", {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              'auth': localStorage.getItem('token')
            },
          });
          const data = await response.json();
          this.props.setCategory(data);
    }
    
    addCategory = async (param) =>{
        const response = await fetch("http://localhost:8000/api/category", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              'auth': localStorage.getItem('token')
            },
            body: JSON.stringify(param)
          });
          const data = await response.json();
          console.log(data);
           this.props.addCategory(data)
        //   console.log(this.props.cateogries);    
    }
    editCategory = async (param) =>{
        const response = await fetch("http://localhost:8000/api/category/edit/"+param._id, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              'auth': localStorage.getItem('token')
            },
            body: JSON.stringify(param)
          });
        const data = await response.json();
        this.props.editCategory(data);
        this.setState(() => ({selectedCategory: {}}))    
    }

    onSelectCategory = (selectedCategory)=>{
        this.setState(()=>({selectedCategory}))
    }

    render() {
        return (
            <div>
              <CategoryForm onSubmit = {(category)=> this.addCategory(category)}/> 
            {
                this.state.selectedCategory._id && <CategoryForm onSubmit = {(category)=> this.editCategory(category)} selectedCategory = {this.state.selectedCategory}/>
            }
            <div>
                {
                  this.props.cateogries.map((category)=> <CategoryItem key={category._id} onSelectCategory={this.onSelectCategory} category={category}/> )   
                 
                }
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cateogries: state.cateogries
})

const mapDispatchToProps = (dispatch) => {
    return {
        setCategory: (data)=>{
            dispatch(setCategory(data));
        },
        addCategory: (data)=>{
            dispatch(addCategory(data));
        },
        editCategory: (data)=>{
            dispatch(editCategory(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
