import React from 'react'

export default function ItemItem(props) {
  console.log(props.item)
  return (
    <div>
      <h2>{props.item.name}</h2>
      <img src={props.item.img} />
      <h3>Price: ${props.item.price}</h3>
      <h3>Category: {props.item.categoryId.name}</h3>
    </div>
  )
}

//onClick={() => props.onSelectCategory(props.category)}