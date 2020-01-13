import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './../store/actions/admin';
import {Row, Col, Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';
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
            <div>
                <Container className="myApp">
                <h2>Login</h2>

                <form onSubmit = {this.handleSubmit}>
                <Col>
                 <FormGroup> 
                    <Input type = 'text' placeholder = 'Email' value = {this.state.email} onChange = {this.handleEmailChange} className='inputForm'/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup> 
                    <Input type = 'password' placeholder = 'Password' value = {this.state.password} onChange = {this.handlePasswordChange} className='inputForm'/>
                    </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </form>
              </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
