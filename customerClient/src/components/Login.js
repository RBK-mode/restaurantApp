import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './../store/actions/user';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../index.css';

export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e){
        let email = e.target.value;
        this.setState(() => ({email}));
    }

    handlePasswordChange(e){
        let password = e.target.value;
        this.setState(() => ({password}));

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login({
            email: this.state.email,
            password: this.state.password
        })
    }

    render() {
        return (
              <Col className = 'category-container'>
                <form onSubmit = {this.handleSubmit} className='mydiv'>
                    <FormGroup className='myform'>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" placeholder="example@example.com" onChange = {this.handleEmailChange} value = {this.state.email}/>
                    </FormGroup>
                    <FormGroup className='myform'>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" placeholder="password" onChange = {this.handlePasswordChange} value = {this.state.password} />
                    </FormGroup>
                    <Button type="submit" className="btn-lg btn-green btn-block">Submit</Button>
                     <Link to='/signup'>sign up</Link>
                </form>
             </Col>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
