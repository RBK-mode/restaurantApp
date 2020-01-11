import React from 'react'

export default function CategoryItem(props) {
    return (
        <div onClick={ () => props.onSelectCategory(props.category) }>
           <h2>{props.category.name}</h2>
           <img src={props.category.img} style={{height: '100px',width:'100px'}}/>
        </div>
    )
}
