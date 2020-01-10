import React from 'react'

export default function ItemItem(props) {
  return (
    <div onClick={() => props.onSelectedItem(props.item)}>
      <h2>{props.item.name}</h2>
      <img src={props.item.img} />
      <h3>Price: ${props.item.price}</h3>
      <button onClick={() => props.addToMenu(props.item)}> Add To Menu </button>
      <h3>Category: {props.item.categoryId.name}</h3>

    </div>
  )
}

