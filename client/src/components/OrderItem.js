import React from 'react';

export default function OrderItem(props) {
  return (
    <tr>
      <td>
        {
          props.order.items_list.map(item => {
            return <h5>{item.name}</h5>
          })
        }
      </td>
      <td>
        {
          props.order.items_list.map(item => {
            return <h5>{item.quantity}</h5>
          })
        }
      </td>
      <td>
        {props.order.createdAt}
      </td>
    </tr>
  )
}
