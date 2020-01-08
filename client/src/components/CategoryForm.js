import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CategoryForm extends Component {
    state = {
        _id:  this.props.selectedCategory && this.props.selectedCategory._id || '',
        name: this.props.selectedCategory && this.props.selectedCategory.name || '',
        img:  this.props.selectedCategory && this.props.selectedCategory.img ||''
    }
    onChangeNameHandler = (e)=>{
        let name = e.target.value;
        this.setState(()=> ({name}))
    }
    onChangeImgHandler = (e)=>{
        let img = e.target.value;
        this.setState(()=> ({img}))
    }
    onSubmitHandler = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState(()=>({
            name: '',
            img: ''
        }))
    }

    render() {
        return (
            <form onSubmit = {this.onSubmitHandler}>
                <input type="text" placeholder="Category Name" value = {this.state.name} onChange={this.onChangeNameHandler}/>
                <input type="text" placeholder="Image source" value = {this.state.img} onChange={this.onChangeImgHandler}/>
                <button type="submit">Submit</button> 
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)
