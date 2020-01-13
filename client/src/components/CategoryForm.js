import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export class CategoryForm extends Component {
    state = {
        _id: this.props.selectedCategory && this.props.selectedCategory._id || '',
        name: this.props.selectedCategory && this.props.selectedCategory.name || '',
        img: this.props.selectedCategory && this.props.selectedCategory.img || ''
    }
    onChangeNameHandler = (e) => {
        let name = e.target.value;
        this.setState(() => ({ name }))
    }
    onChangeImgHandler = (e) => {
        let img = e.target.value;
        this.setState(() => ({ img }))
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState(() => ({
            name: '',
            img: ''
        }))
    }

    render() {
        var inline = {
            margin: '10px',
            display: 'flex',
            flexDirection: 'row'
        }

        return (
            <Form onSubmit={this.onSubmitHandler} style={inline}>
                <FormGroup style={inline}>
                    <Input type="text" placeholder="Category Name" value={this.state.name} onChange={this.onChangeNameHandler} style={{ padding: '0px 100px' }} />
                    <Input type="text" placeholder="Image source" value={this.state.img} onChange={this.onChangeImgHandler} style={{ padding: '0px 100px' }} />
                    <Button type="submit" style={{ padding: '0px 80px' }}>Submit</Button>
                </FormGroup>
            </Form>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)
