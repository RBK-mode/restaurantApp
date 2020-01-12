import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { signup } from '../store/actions/user';

export class Signup extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
    }

    handleNameChange = (e) => {
        let name = e.target.value;
        this.setState(() => ({name}));
    }

    handleEmailChange = (e) => {
        let email = e.target.value;
        this.setState(() => ({email}));
    }

    handlePasswordChange = (e) => {
        let password = e.target.value;
        this.setState(() => ({password}));

    }

    handlePhoneNumberChange = (e) => {
        let phoneNumber = e.target.value;
        this.setState(() => ({phoneNumber}));

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber
        });
    }

    render() {
        return (
            <Container>
                <Form onSubmit = {this.handleSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">name</Label>
                        <Input type="text" name="name" placeholder="henry abdo" onChange = {this.handleNameChange} value = {this.state.name}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" placeholder="example@example.com" onChange = {this.handleEmailChange} value = {this.state.email}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Phone Number</Label>
                        <Input type="text" name="phone number" placeholder="0928133445" onChange = {this.handlePhoneNumberChange} value = {this.state.phoneNumber}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" placeholder="password" onChange = {this.handlePasswordChange} value = {this.state.password} />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    signup: (data) => dispatch(signup(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

