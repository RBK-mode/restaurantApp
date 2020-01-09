import React from 'react'

export default function ItemItem(props) {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <img src={props.item.img} />
    </div>
  )
}

//onClick={() => props.onSelectCategory(props.category)}