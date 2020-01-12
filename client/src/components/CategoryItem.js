import React from 'react'
import {Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import '../index.css';

export default function CategoryItem(props) {
    return (
        <Col className = 'category-container'>
        <div onClick={ () => props.onSelectCategory(props.category) }>
        <div className="dropdown">
           <h4>{props.category.name}</h4>
           <img src={props.category.img} style={{height: '200px',width:'200px'}}/>
           </div>
        </div>
        </Col>
    )
}
