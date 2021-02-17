import React from 'react';

import './table-row.styles.css';

const TableRow = ({id,firstName,lastName,email,phone, onClick}) => {

    
    return (
        <tr id={`${email}`} onClick={onClick}>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td> {email}</td>
          <td>{phone}</td>
        </tr>
    )
}

export default TableRow;