import React from 'react';

export default function CustomerItem(props) {
  return (
    <tr>
      <td>
        {props.customer.name}
      </td>
      <td>
        {props.customer.email}
      </td>
      <td>
        {props.customer.phoneNumber}
      </td>
    </tr>
  )
}
