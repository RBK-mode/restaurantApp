import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerItem(props) {
  return (
    <tr>
      <Link to={"/admin/order/" + props.customer._id}>
        <td>
          {props.customer.name}
        </td>
      </Link>
      <td>
        {props.customer.email}
      </td>
      <td>
        {props.customer.phoneNumber}
      </td>
    </tr>
  )
}
