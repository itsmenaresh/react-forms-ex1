import React, {useState, useEfect} from "react";

const Table = ({users})=>{
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(item=> {
          return (
            <tr key={item.id}>
              <td>{item["first_name"]}</td>
              <td>{item["last_name"]}</td>
              <td>{item.email}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;