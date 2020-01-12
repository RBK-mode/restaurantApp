import React from 'react';

export default function OrderItem(props) {
  return (
    <tr>
      <td>
        {<p>{props.order.customerId.name}</p>}
      </td>
      <td>
        {<p>{props.order.state}</p>}
      </td>
      <td>
        {
          props.order.items_list.map(item => {
            return <p>{item.name}</p>
          })
        }
      </td>
      <td>
        {
          props.order.items_list.map(item => {
            return <p>{item.quantity}</p>
          })
        }
      </td>
      <td>
        {
          props.order.items_list.map(item => {
            return <p>{item.price}</p>
          })
        }
      </td>
      <td>
        <p>{props.order.total}</p>
      </td>
      <td>
        <p>{props.order.createdAt}</p>
      </td>
    </tr>
  )
}
