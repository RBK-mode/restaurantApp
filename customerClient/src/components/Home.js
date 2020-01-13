import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Button} from 'reactstrap';
import { Redirect } from 'react-router-dom';

import { setMenu } from './../store/actions/menu';
import { setCategory } from './../store/actions/category';
import '../index.css'
import Header from './Header';
import Menu from './Menu';
import Order from './Order';

class Home extends Component {

    state = {
        modal: false
    }

    toggle = () => this.setState((prevState) => ({modal: !prevState.modal}));

    componentDidMount(){
        this.props.setCategory();
        this.props.setMenu();
    }

    render() {
        return (
            <div className='mybody'> 
                  
                <Header/>
                {/* <showcase>
                <div className='mycontainer '>
                    <h1>Food tastes better when you eat it from our Reasturant</h1>
                    <h3>Veg, Non-Veg and all kind of Snacks are available</h3>
                    <div className='category'>
                        <div className='thai'> 
                        <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thai-food-river-prawn-spicy-soup-on-wooden-table-royalty-free-image-1568926151.jpg?crop=0.668xw:1.00xh;0.0240xw,0&resize=640:*'
                        className='myimg'/> 
                        <h4>Thai Tanic</h4>
                        <p>lorem ipsm dolor sit amet, cosectetur adipisicing elit</p>
                        </div>
                        <div className='snacks'> 
                        <img src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fserenitygibbons%2Ffiles%2F2018%2F11%2FScreen-Shot-2018-11-15-at-11.10.56-AM.jpg'
                        className='myimg'/> 
                        <h4>Evening Snacks</h4>
                        <p>lorem ipsm dolor sit amet, cosectetur adipisicing elit</p>
                        </div>
                        <div className='g rill'> 
                        <img src='https://www.simplyrecipes.com/wp-content/uploads/2011/08/barbecued-chicken-on-the-grill-horiz-a-1200.jpg'
                        className='myimg'/>
                        <h4>Gechew Grill</h4>
                        <p>lorem ipsm dolor sit amet, cosectetur adipisicing elit</p>
                        </div>
                    </div>
                    </div> 
                    </showcase> */}
                <Container>
                    <Row>
                        <h1>Welcome</h1>
                    </Row>
                    <Menu />
                    {
                        this.props.request._id && <Button color="danger" onClick={this.toggle}>track order</Button>
                    }
                    {
                        this.props.request._id && <Order modal = {this.state.modal} toggle = {this.toggle}/>
                    }
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    request: state.request
})

const mapDispatchToProps = (dispatch) => ({
    setCategory: () => dispatch(setCategory()),
    setMenu: () => dispatch(setMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


