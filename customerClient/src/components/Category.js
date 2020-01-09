import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Collapse, Button, CardBody, Card, Col, Row } from 'reactstrap';

const data = [
    {_id: 'wfdeerfr45', name: 'drinks', img: 'https://images.unsplash.com/photo-1549128247-37e905ebdb3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {_id: 'wfdeerfr45', name: 'sandwiches', img: 'https://image.shutterstock.com/image-photo/grilled-sandwich-cheese-vegetables-green-260nw-779730214.jpg'},
    {_id: 'wfdeerfr45', name: 'cake', img: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1043451_11.jpg?itok=Z_w2WOYB'},
    {_id: 'wfdeerfr45', name: 'pizza', img: 'https://image.shutterstock.com/image-photo/supreme-pizza-lifted-slice-1-260nw-84904912.jpg'},   
]

const CategoryItem = ({category}) => (
    <Col className = 'category-container'>
        <Row>
            <img className = 'category-img' src = {category.img}/>
        </Row>
        <Row>
            <div className = 'category-name'>{category.name}</div>
        </Row>
    </Col>
)

export class Category extends Component {

    render() {
        return (
              <Collapse isOpen={this.props.isOpen}>
                  <Row className = 'categories-container'>
                    {
                        data.map(category => <CategoryItem key = {category._id} category = {category}/>)
                    }
                  </Row>
              </Collapse>
          );
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
